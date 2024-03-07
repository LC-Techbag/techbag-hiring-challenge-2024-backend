import { Request, Response } from 'express';
import * as argon2 from "argon2";
import Vendor from '../models/vendor';
import { VendorAttributes } from '../models/vendor';

// Complete the implementation of createVendor API
const createVendor = async (req: Request, res: Response) => {
  // Input validation (add thorough checks here) return appropriate HTTP error if validation fails
 
  try {
    // Hash the password using Argon2
    // Create the Vendor Model
    // Upon successful creation, return the vendorId along with 201 response code
  } catch (err) { 
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

// Implement listVendors API here 

export { createVendor }; // Add listVendors to exports
