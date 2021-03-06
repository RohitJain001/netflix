import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react';
import './listItem.scss'

const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div 
            className="listItem" 
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
            style={{left: isHovered && index * 225 -50 + index * 2.5}}
        >
            <img 
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/12/10/1009203-velle-film-review.jpg" 
                alt="img" 
            />
            {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownAltOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 13 mins</span>
                    <span className='limit'>16+</span>
                    <span>1998</span>    
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed amet, voluptate eveniet
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default ListItem
