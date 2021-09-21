const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/errorHandler");
const SearchFeature = require("../utils/searchFeature");
const Shop = require("../models/shop.model");

// ADD NEW Shop => api/v1/shop/add
exports.addShop = async (req, res) => {
  const { name, phoneNo, desc, location, services } = req.body;
  try {
    const shopExist = await Shop.findOne({ name });
    if (shopExist) {
      return ErrorHandler("Shop already exists", 404, res);
    }

    const result = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "Dhobi/shops",
      quality: "auto",
    });
    const shop = await Shop.create({
      name,
      phoneNo,
      desc,
      location,
      services,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    res.status(200).json({ success: true, shop });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// GET ALL Shops => api/v1/shops?keyword=dd
exports.getAllShops = async (req, res) => {
  const resPerPage = 4;
  const count = await Shop.countDocuments();
  const countShopsInArea = await Shop.countDocuments({ "location.area": req.query.area });
  const searchApi = await new SearchFeature(Shop.find(), req.query).searchShop();
  searchApi.ShopPagination(resPerPage);
  const shops = await searchApi.query;

  res.status(200).json({
    success: true,
    shops,
    count,
    shopsInArea: countShopsInArea,
  });
};

// DELETE Shop BY ID => api/v1/shop/:id
exports.deleteShop = async (req, res) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    return ErrorHandler(`Shop not found with id: ${req.params.id}`, 404, res);
  }

  try {
    const image_id = shop.image.public_id;
    await cloudinary.v2.uploader.destroy(image_id);
    await shop.remove();

    res.status(200).json({ success: true, msg: "Deleted" });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// GET MALL BY ID => api/v1/malls/:id
exports.getShopById = async (req, res) => {
  const shop = await Shop.findById(req.params.id);
  try {
    if (!shop) {
      return ErrorHandler(`Shop not found with id: ${req.params.id}`, 404, res);
    }
    res.status(200).json({ success: true, shop });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// UPDATE MALL  => api/v1/malls/:id
exports.updateShop = async (req, res) => {
  const { name, phoneNo, desc, location, ratings, numOfReviews, services } = req.body;
  const newShopDetails = {
    name,
    phoneNo,
    desc,
    location,
    ratings,
    numOfReviews,
    services,
  };

  try {
    if (req.body.image) {
      const shop = await Shop.findById(req.params.id);
      const image_id = shop.image.public_id;
      await cloudinary.v2.uploader.destroy(image_id);

      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "Dhobi/shops",
        quality: "auto",
      });

      newShopDetails.image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }
    const shop = await Shop.findByIdAndUpdate(req.params.id, newShopDetails, {
      new: true,
      useFindAndModify: false,
    });

    res.status(200).json({ success: true, shop });
  } catch (error) {
    ErrorHandler(error, 500, res);
  }
};

// Create new review   =>   /api/v1/shop/review
exports.review = async (req, res) => {
  const { rating, comment, shopId } = req.body;

  try {
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const shop = await Shop.findById(shopId);

    const isReviewed = shop.reviews.find((r) => r.user.toString() === req.user._id.toString());

    if (isReviewed) {
      shop.reviews.forEach((review) => {
        if (review.user.toString() === req.user._id.toString()) {
          review.comment = comment;
          review.rating = rating;
        }
      });
    } else {
      shop.reviews.push(review);
      shop.numOfReviews = shop.reviews.length;
    }

    shop.ratings = shop.reviews.reduce((acc, item) => item.rating + acc, 0) / shop.reviews.length;

    await shop.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    ErrorHandler(error, 500, res);
  }
};

// Delete Product Review   =>   /api/v1/shop/reviews
exports.deleteReview = async (req, res) => {
  try {
    const shop = await Shop.findById(req.query.shopId);

    const reviews = shop.reviews.filter(
      (review) => review._id.toString() !== req.query.id.toString()
    );

    const numOfReviews = reviews.length;

    const ratings = shop.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

    await Shop.findByIdAndUpdate(
      req.query.shopId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    ErrorHandler(error, 500, res);
  }
};
