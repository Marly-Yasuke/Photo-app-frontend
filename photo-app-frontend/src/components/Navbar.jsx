import React from "react";
import { useContext } from "react";                   
import { AuthContext } from "../context/auth.context"; 

function Navbar () {
    const { isLoggedIn, user } = useContext(AuthContext);
        return (
            <nav>
            {isLoggedIn && (

                <>
        
                  {/* <Link to="*"> */}
        
                    <button>Feed</button>
        
                  {/* </Link>         */}
        
                  {/* <Link to="*"> */}
        
        <button>About</button>

      {/* </Link>           */}
                </>
        
              )}
              {!isLoggedIn && (

                <>
        
               
        
                </>
        
              )}
        
            </nav>
        
          );
        
        }
        
    


export default Navbar;