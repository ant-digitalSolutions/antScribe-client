import { IOpenAiChoice } from "./openai-choice";
import { IOpenAiUsage } from "./openai-usage";

export interface IOpenAiCompletionResponse {
   
    id: string;

   
    object: string;

   
    created: number;

   
    model: string;

    choices: IOpenAiChoice[];

    usage: IOpenAiUsage;

    getChoicesTexts(): string[];
}

export class OpenAiCompletionResponse implements IOpenAiCompletionResponse {
    id!: string;
    object!: string;
    created!: number;
    model!: string;
    choices!: IOpenAiChoice[];
    usage!: IOpenAiUsage;
    
    public getChoicesTexts() : string[] {
        return this.choices.map(ch => ch.text);
    }
    
}
