const slugify = require("slugify");
const Category = require("../models/category");

exports.createCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name)
  };

  if(req.file.filename){
    categoryObj.categoryImage = req.file.filename
  }
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }
  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category)
      return res.status(201).json({
        category,
      });
  });
};

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;

  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (const cate of category) {
    categoryList.push({
      id: cate._id,
      name: cate.name,
      slug: cate.slug,
      
      children: createCategories(categories, cate._id),
    });
  }
  return categoryList;
}

exports.getCategory = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error)
      return res.status(400).json({ message: "get category api problem" });
    if (categories) {
      const categoryList = createCategories(categories);

      return res.status(200).json({ categoryList });
    }
  });
};
