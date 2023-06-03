 const fetchData = async (name: string, id?: string) => {
    let url = "";
    switch (name) {
      case "highlights":
        url = "http://localhost:3002/https://web-dev.dev.kimo.ai/v1/highlights";
        break;
      case "categories":
        url = "http://localhost:3002/https://web-dev.dev.kimo.ai/v1/categories";
        break;
      case "activities":
        url =
          "http://localhost:3002/https://web-dev.dev.kimo.ai/v1/activities/" +
          id;
        break;
      default:
        url = "";
        break;
    }
    try {
      const response = await fetch(url, {
        mode: "cors",
      });
      const data = await response.json();
      return data
      // if (name === "highlights") setHighLights(data);
      // else if (name === "categories") setCategories(data);
      // else if (name === "activities") setActivities(data);
    } catch (error) {
      console.error("Error fetching ", name, ": ", error);
    }
  };

  export default fetchData