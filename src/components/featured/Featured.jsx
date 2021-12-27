import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type==="movies" ? "Movies" : "Series"}</span>
                    <select id="genre" className="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )
            }
            <img 
                src='https://cdn.mos.cms.futurecdn.net/H7XTQQVied3xEnKzvNraDT.jpg' 
                alt=''
            />
            <div className="info">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMk4CUOWPxBx6LILkNDzhWD6O2vH5PM61_A&usqp=CAU"
                    alt="" 
                />
                <span className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, voluptas illum nisi aut laudantium mollitia quibusdam. Recusandae quis voluptatum assumenda perferendis. Sunt aliquid ratione, qui aliquam quidem officiis ullam asperiores.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
