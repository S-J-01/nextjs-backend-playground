import axios from "axios"

export default async function User(){

const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
const data = response.data;

    return(
        <div>
            {data.name} <br />
            {data.email}
        </div>
    )
}