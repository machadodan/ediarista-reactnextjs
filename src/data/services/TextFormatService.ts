export const TextFormatService = {
  reverseDate(data: string): string {
    if (data.includes("/")) {
      return data.split("/").reverse().join("-");
    }

    if (data.includes("T")) {
      [data] = data.split("T");
    }
    return data.split("-").reverse().join("/");
  },
};

//2020/20/20
//['2020','20','01']
//['01','20','2020']
//01-20-2020
//2020-20-01T01:01:01Z
