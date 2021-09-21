class SearchFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // Search Shop
  searchShop() {
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

    const area = this.queryStr.area
      ? {
          "location.area": {
            $regex: this.queryStr.area,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword, ...area }).sort(sortBy);
    return this;
  }

  // Filter Shop
  // filterShop() {
  //   const queryCopy = { ...this.queryStr };

  //   // Removing fields from the query
  //   const removeFields = ["keyword", "limit", "page"];
  //   removeFields.forEach((el) => delete queryCopy[el]);

  //   this.query = this.query.find(area);
  //   return this;
  // }

  ShopPagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

module.exports = SearchFeature;
