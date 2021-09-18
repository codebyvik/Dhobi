const Mall = require("../models/mallSchema");
const Seller = require("../models/sellerSchema");

class SearchFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // Search Mall
  searchMall() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    let sortBy = null;

    if (this.queryStr.sort === "name") {
      sortBy = {
        name: 1,
      };
    } else if (this.queryStr.sort === "createdAt") {
      sortBy = {
        createdAt: -1,
      };
    }

    this.query = this.query.find({ ...keyword }).sort(sortBy);
    return this;
  }

  // Filter mall
  filterMall() {
    const queryCopy = { ...this.queryStr };

    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    // Advance filter for price, ratings etc

    const city = queryCopy.city
      ? {
          city: queryCopy.city,
        }
      : {};

    this.query = this.query.find(city);
    return this;
  }

  MallPagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }

  // Search Shops
  searchShops(id) {
    const keyword = this.queryStr.keyword
      ? {
          sellerName: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    const mallId = this.queryStr.mall
      ? {
          mallId: id,
        }
      : {};

    let sortBy = null;

    if (this.queryStr.sort === "name") {
      sortBy = {
        sellerName: 1,
      };
    } else if (this.queryStr.sort === "createdAt") {
      sortBy = {
        createdAt: -1,
      };
    }
    console.log({ ...mallId, ...keyword });
    this.query = this.query
      .find({ ...mallId, ...keyword })
      .populate("seller", "name email avatar shippingInfo ")
      .populate("mallId", "name")
      .sort(sortBy);

    return this;
  }

  // Filter shops
  filterShops() {
    const queryCopy = { ...this.queryStr };

    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    // Advance filter for price, ratings etc

    const city = queryCopy.city
      ? {
          city: queryCopy.city,
        }
      : {};

    this.query = this.query.find(city);
    return this;
  }

  ShopPagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }

  // Search Products
  searchProducts() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    let sortBy = null;

    if (this.queryStr.sort === "name") {
      sortBy = {
        name: 1,
      };
    } else if (this.queryStr.sort === "createdAt") {
      sortBy = {
        createdAt: -1,
      };
    } else if (this.queryStr.sort === "lowtohigh") {
      sortBy = {
        price: 1,
      };
    } else if (this.queryStr.sort === "hightolow") {
      sortBy = {
        price: -1,
      };
    } else if (this.queryStr.sort === "rating") {
      sortBy = {
        ratings: -1,
      };
    }

    const seller = this.queryStr.shop
      ? {
          seller: this.queryStr.shop,
        }
      : {};

    this.query = this.query.find({ ...seller, ...keyword }).sort(sortBy);
    return this;
  }

  // Filter mall
  filterProducts() {
    const queryCopy = { ...this.queryStr };

    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    // Advance filter for price, ratings etc

    const city = queryCopy.city
      ? {
          city: queryCopy.city,
        }
      : {};

    this.query = this.query.find(city);
    return this;
  }

  ProductPagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

module.exports = SearchFeature;
