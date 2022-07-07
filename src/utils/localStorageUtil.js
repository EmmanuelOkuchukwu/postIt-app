
// class localStorageUtil {
//   constructor(namespace = 'jwt') {
//     this.namespace = namespace
//   }
//
//   async getUserInfo() {
//     const rawProducts = localStorage.getItem(
//       `${this.namespace}:userJwt`,
//     )
//
//     return rawProducts ? JSON.parse(rawProducts) : []
//   }
//   setUserInfo() {}
//   removeUserInfo() {}
// }
//
// export default new localStorageUtil()