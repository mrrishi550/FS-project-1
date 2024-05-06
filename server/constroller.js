import { model } from "mongoose";
import Wine from "./model/Drinks.js";
export const postdata = async (req, res) => {
  const model = new Wine(req.body);
  const saved = await model.save();
  res.json(saved);
};
export const getData = async (req, res) => {
  try {
    const data = await Wine.find();
    res.json(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send((err) => console.log(err));
  }
};
// export const getDataById = async (req, res) => {
//   const data = await Wine.find({ rating: req.params.rating });
//   res.json(data);
// };
export const getDatasId = async (req, res) => {
  try {
    const data = await Wine.findById(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send("Id not found");
    }
  } catch (error) {
    res.status(500).send((err) => console.log(err));
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Wine.findOne({ Taste: req.params.name });
    res.json(data);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).send((err) => console.log(err));
    }
  } catch {
    res.status(500).send((err) => console.log(err));
  }
};

export const DeleteData = async (req, res) => {
  try {
    await Wine.findByIdAndDelete(req.params.id);
    res.send("ID Deleted");
  } catch {
    res.status(500).send((err) => console.log(err));
  }
};

export const add = async (req, res) => {
  const data = new Wine(req.body);
  const saved = await data.save();
  res.send(saved);
};

export const putData = async (req, res) => {
  try {
    const content = req.body;
    const savedData = await Wine.findByIdAndUpdate(req.params.id, content, {
      new: true,
    });
    res.json(savedData);
  } catch {
    res.status(500).json((err) => {
      console.log(err);
    });
  }
};
