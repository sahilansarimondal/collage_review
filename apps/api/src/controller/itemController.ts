import { NextFunction, Request, Response } from "express";
import { Item, items } from "../models/item";

// Create an item
export const createItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    const newItem: Item = { id: Date.now(), name };
    items.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
};

// Get all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

// Get a single item
export const getItemById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = items.find((item) => item.id === Number(id));
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Update an item
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const item = items.find((item) => item.id === Number(id));
    if (item) {
      item.name = name;
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Delete an item
export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((item) => item.id === Number(id));
    if (itemIndex !== -1) {
      items.splice(itemIndex, 1);
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    next(error);
  }
};
