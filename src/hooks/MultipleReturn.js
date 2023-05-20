import { useEffect, useState } from "react";
import error from "./error";

const url = "https://api.github.com/users/kevinclark";

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 300) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log("error aldı" + err.message));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return <h1>{user}</h1>;
};

export default MultipleReturn;
