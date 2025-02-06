import axios from "axios";
import { isPrime, isPerfect, isArmstrong, digitSum } from "../utils/logic.js";

const classifyNumber = async (req, res) => {
    const { number } = req.query;
    
    // Validate input
    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ 
            "number":"alphabet", 
             error: true,
        });
        
    }

    const num = Number(number);
    const properties = [];

    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    try {
        const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: digitSum(num),
            fun_fact: funFactResponse.data.text
        });

    } catch (error) {
        return res.status(500).json({ 
            success: false,
            error: true,
            message: "Failed to fetch fun fact."
         });
    }
};

export default classifyNumber;
