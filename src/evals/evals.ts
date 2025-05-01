//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const fuzz_domainEval: EvalFunction = {
    name: 'fuzz_domain Tool Evaluation',
    description: 'Evaluates domain permutations logic for potential typosquatting detection',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Generate and analyze domain permutations for the domain 'example.com' to detect potential typosquatting, phishing, and brand impersonation. Provide the permutations in JSON format with their status and relevant details.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [fuzz_domainEval]
};
  
export default config;
  
export const evals = [fuzz_domainEval];