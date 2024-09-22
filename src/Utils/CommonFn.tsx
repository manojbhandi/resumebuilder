export const makeAbsoluteUrl = (url:string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`; 
  };
  
 
  export const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    return user && JSON.parse(user).user;
};