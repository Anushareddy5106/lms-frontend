export class Query {
    queryId: number;
    description: string;
    response: string;
    JoinerId: number;
    mentorId: number;
  
    constructor(
      queryId: number,
      description: string,
      response: string,
      JoinerId: number,
      mentorId: number,
    ) {
      this.queryId = queryId;
      this.description = description;
      this.response = response;
      this.JoinerId = JoinerId;
      this.mentorId = mentorId;
    }
  }