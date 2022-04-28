import axios from 'axios';

export const register = ({username,name,email,phone,password})=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });

    try {
        const res = await axios.post("http:localhost:5000/api/auth/register", {username,name,email,phone,password});

        if(res.data.success) {
            localStorage.setItem("just_token",res.data.authToken);
            dispatch({
                type: 'register',
                payload: {
                    user: res.data.authToken
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'register',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'register',
            payload: {
                error: error.message
            }
        });
    }
}

export const login = ({email,password})=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });

    try {
        const res = await axios.post("http:localhost:5000/api/auth/login", {email,password});

        if(res.data.success) {
            localStorage.setItem("just_token",res.data.authToken);
            dispatch({
                type: 'login',
                payload: {
                    user: res.data.authToken
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'login',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'register',
            payload: {
                error: error.message
            }
        });
    }
}

export const getProfile = ()=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });

    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.get("http:localhost:5000/api/auth/profile", {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile",JSON.stringify(res.data.user));
            dispatch({
                type: 'profile',
                payload: {
                    profile: res.data.user
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'profile',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'profile',
            payload: {
                error: error.message
            }
        });
    }
}

export const editProfile = ({username,name,email,phone,profilePic})=> async(dispatch)=> {
    // dispatch({
    //     type: "set-loading"
    // });

    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put("http:localhost:5000/api/auth/editProfile", {username,name,email,phone,profilePic} , {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile",JSON.stringify(res.data.user));
            dispatch({
                type: 'edit-profile',
                payload: {
                    profile: res.data.user
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'edit-profile',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'edit-profile',
            payload: {
                error: error.message
            }
        });
    }
}

export const follow = (adduser)=> async(dispatch)=> {
    // dispatch({
    //     type: "set-loading"
    // });

    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put("http:localhost:5000/api/auth/follow", {adduser} , {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile",JSON.stringify(res.data.savedUser));
            dispatch({
                type: 'follow',
                payload: {
                    profile: res.data.savedUser
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'follow',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'follow',
            payload: {
                error: error.message
            }
        });
    }
}

export const unfollow = (removeuser)=> async(dispatch)=> {
    // dispatch({
    //     type: "set-loading"
    // });

    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put("http:localhost:5000/api/auth/unfollow", {removeuser} , {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile",JSON.stringify(res.data.savedUser));
            dispatch({
                type: 'unfollow',
                payload: {
                    profile: res.data.savedUser
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'unfollow',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'unfollow',
            payload: {
                error: error.message
            }
        });
    }
}

export const getSuggestion = ()=> async(dispatch)=> {
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.get("http:localhost:5000/api/auth/getSuggestion", {headers: {"auth-token": token}});

        if(res.data.success) {
            // localStorage.setItem("just_suggestion",JSON.stringify(res.data.suggestedUsers));
            dispatch({
                type: 'get-suggestion',
                payload: {
                    suggestedUsers: res.data.suggestedUsers
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'get-suggestion',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'get-suggestion',
            payload: {
                error: error.message
            }
        });
    }
}

export const addDp = (image)=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });

    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put("http:localhost:5000/api/auth/adddp", {image} , {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile",JSON.stringify(res.data.savedUser));
            dispatch({
                type: 'add-dp',
                payload: {
                    profile: res.data.savedUser
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'add-dp',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'add-dp',
            payload: {
                error: error.message
            }
        });
    }
}

export const searchUsers = (username)=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.get(`http:localhost:5000/api/auth/users/${username}`, {headers: {"auth-token": token}});

        if(res.data.success) {
            dispatch({
                type: 'search-users',
                payload: {
                    searchedUsers: res.data.users
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'search-users',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'search-users',
            payload: {
                error: error.message
            }
        });
    }
}

// ***************POST SECTION******************\\

export const getPosts = ()=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.get("http:localhost:5000/api/posts/getposts", {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'get-posts',
                payload: {
                    posts: res.data.posts
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'get-posts',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'get-posts',
            payload: {
                error: error.message
            }
        });
    }
}

// *********** This method is not required ********\\
// export const getSubPost = ()=> async(dispatch)=> {
//     dispatch({
//         type: "set-loading"
//     });
    
//     const token = localStorage.getItem("just_token");
//     try {
//         const res = await axios.get("http:localhost:5000/api/posts/getsubpost", {headers: {"auth-token": token}});

//         if(res.data.success) {
//             dispatch({
//                 type: 'get-subpost',
//                 payload: {
//                     posts: res.data.posts
//                 }
//             });
//         }

//         if(res.data.error) {
//             localStorage.setItem("just_error",res.data.error);
//             dispatch({
//                 type: 'get-subpost',
//                 payload: {
//                     error: res.data.error
//                 }
//             });
//         }

//     } catch (error) {
//         // console.log(error.message);
//         dispatch({
//             type: 'get-subpost',
//             payload: {
//                 error: error.message
//             }
//         });
//     }
// }

export const addPost = ({image,caption})=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.post("http:localhost:5000/api/posts/addpost", {image,caption} , {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile", JSON.stringify(res.data.user));
            // localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'add-post',
                payload: {
                    profile: res.data.user,
                    mypost: res.data.savedPost
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'add-post',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'add-post',
            payload: {
                error: error.message
            }
        });
    }
}

export const updatePost = ({id,image,caption})=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put(`http:localhost:5000/api/posts/updatepost/${id}`, {image,caption} , {headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'update-post',
                payload: {
                    posts: res.data.posts
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'update-post',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'update-post',
            payload: {
                error: error.message
            }
        });
    }
}

export const deletePost = (id)=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.delete(`http:localhost:5000/api/posts/deletepost/${id}`,{headers: {"auth-token": token}});

        if(res.data.success) {
            localStorage.setItem("just_profile", JSON.stringify(res.data.user));
            // localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'delete-post',
                payload: {
                    profile: res.data.user,
                    deletedPost: res.data.post
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'delete-post',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'delete-post',
            payload: {
                error: error.message
            }
        });
    }
}

export const likePost = (id)=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put(`http:localhost:5000/api/posts/like/${id}`,{headers: {"auth-token": token}});

        if(res.data.success) {
            // localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'like-post',
                payload: {
                    mypost: res.data.post
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'like-post',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'like-post',
            payload: {
                error: error.message
            }
        });
    }
}

export const unlikePost = (id)=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put(`http:localhost:5000/api/posts/unlike/${id}`,{headers: {"auth-token": token}});

        if(res.data.success) {
            // localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'unlike-post',
                payload: {
                    mypost: res.data.post
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'unlike-post',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'unlike-post',
            payload: {
                error: error.message
            }
        });
    }
}

export const addComment = (id)=> async(dispatch)=> {
    dispatch({
        type: "set-loading"
    });
    
    const token = localStorage.getItem("just_token");
    try {
        const res = await axios.put(`http:localhost:5000/api/posts/comment/${id}`,{headers: {"auth-token": token}});

        if(res.data.success) {
            // localStorage.setItem("just_posts", JSON.stringify(res.data.posts));
            dispatch({
                type: 'add-comment',
                payload: {
                    mypost: res.data.post
                }
            });
        }

        if(res.data.error) {
            localStorage.setItem("just_error",res.data.error);
            dispatch({
                type: 'add-comment',
                payload: {
                    error: res.data.error
                }
            });
        }

    } catch (error) {
        // console.log(error.message);
        dispatch({
            type: 'add-comment',
            payload: {
                error: error.message
            }
        });
    }
}