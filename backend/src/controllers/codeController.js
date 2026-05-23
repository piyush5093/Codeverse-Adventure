import { submitCode, executeCodeLocally } from '../utils/judge0API.js';

export const executeCodeController = async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        success: false,
        error: 'Code and language are required'
      });
    }

    // Use Judge0 API for execution
    const result = await submitCode(code, language);

    if (result.success || result.output) {
      res.json({
        success: result.success,
        output: result.output,
        error: result.error,
        status: result.status
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.error || 'Code execution failed'
      });
    }
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Internal server error'
    });
  }
};
