export class ConfirmationCode{
    emailStatus: Status;
    code: string;
}

export enum Status{
    EmailSent,
    ProblemSending,
    EmailNotFound,
    IncorrectFormat
}