import axios, { Method } from "axios";

const BaseURI = "http://localhost:8080";

const client = axios.create({
  baseURL: BaseURI,
  data: JSON,
});

export class AirflowClient {

  public runDag(dag_id: string, runDetails: any) {
    return this.perform("POST", `/api/v1/dags/${dag_id}/dagRuns`, runDetails);
  }

  async perform(method: Method, resource: string, data?: any) {
    return client({
      method,
      url: resource,
      data,
        headers: {
          Authorization: `Basic YWRtaW46V1ZzY05raGtWZllaMk42YQ==`
        }
    })
      .then((resp) => {
        return resp.data ? resp.data : [];
      })
      .catch((error) => {
        console.log(`${error}: ${error.response.data}`);
      });
  }
}
