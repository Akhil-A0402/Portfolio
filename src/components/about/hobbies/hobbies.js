import "./hobbies.css";
import ImageView from "./imageSmall";
import Snapchat340684716 from '../../../assets/images/hobbies/Snapchat-340684716.jpg';
import Snapchat658426559 from '../../../assets/images/hobbies/Snapchat-658426559.jpg';
import Snapchat803226466 from '../../../assets/images/hobbies/Snapchat-803226466.jpg';
import IMG20211205181947 from '../../../assets/images/hobbies/IMG_20211205_181947.jpg';
import IMG20220228163503 from '../../../assets/images/hobbies/IMG_20220228_163503.jpg';
import Withfilter from '../../../assets/images/hobbies/With filter.jpg';
import IMG20220110001754 from '../../../assets/images/hobbies/IMG_20220110_001754.jpg';
import IMG20220412182627 from '../../../assets/images/hobbies/IMG_20220412_182627.jpg';
import I20200102142438 from '../../../assets/images/hobbies/20200102_142438.jpg';
import I20171231_173650 from '../../../assets/images/hobbies/20171231_173650.jpg';
import I20180122_162557 from '../../../assets/images/hobbies/20180122_162557.jpg';
import I20180210_182107 from '../../../assets/images/hobbies/20180210_182107.jpg';
import I20180322_175910 from '../../../assets/images/hobbies/20180322_175910.jpg';
import I20180329_185235 from '../../../assets/images/hobbies/20180329_185235.jpg';
import I20180513_183940 from '../../../assets/images/hobbies/20180513_183940.jpg';
import I20180530_180848 from '../../../assets/images/hobbies/20180530_180848.jpg';
import I20180630_183627 from '../../../assets/images/hobbies/20180630_183627.jpg';
import I20180706_191554 from '../../../assets/images/hobbies/20180706_191554.jpg';
import I20180728_180921 from '../../../assets/images/hobbies/20180728_180921.jpg';
import I20180812_084300 from '../../../assets/images/hobbies/20180812_084300.jpg';
import I20180909_065530 from '../../../assets/images/hobbies/20180909_065530.jpg';
import I20190421_184016 from '../../../assets/images/hobbies/20190421_184016.jpg';
import I20190513_185035 from '../../../assets/images/hobbies/20190513_185035.jpg';
import I20190917_183310 from '../../../assets/images/hobbies/20190917_183310.jpg';
import I20191110_065203 from '../../../assets/images/hobbies/20191110_065203.jpg';
import IMG_20180331_183143 from '../../../assets/images/hobbies/IMG_20180331_183143.jpg';
import IMG_20190421_183941 from '../../../assets/images/hobbies/IMG_20190421_183941.jpg';
import IMG_20190421_184015 from '../../../assets/images/hobbies/IMG_20190421_184015.jpg';
import IMG_20190421_185056 from '../../../assets/images/hobbies/IMG_20190421_185056.jpg';
import IMG_20210620_164734 from '../../../assets/images/hobbies/IMG_20210620_164734.jpg';
import IMG_20210711_175308 from '../../../assets/images/hobbies/IMG_20210711_175308.jpg';
import Moveback from "../../back/moveback";

const Hobbies = () => {
    
    const images=
    [
        {name:"Snapchat340684716",
        image: Snapchat340684716},
        {name:"I20200102142438",
        image: I20200102142438},
        {name:"Snapchat658426559",
        image: Snapchat658426559,
        orientation:"horizontal"},
        {name:"Snapchat803226466",
        image: Snapchat803226466,
        orientation:"horizontal"},
        {name:"IMG20211205181947",
        image: IMG20211205181947,
        orientation:"horizontal"},
        {name:"IMG20220228163503",
        image: IMG20220228163503,
        orientation:"horizontal"},
        {name:"Withfilter",
        image: Withfilter,
        orientation:"horizontal"},
        {name:"IMG20220110001754",
        image: IMG20220110001754,
        orientation:"horizontal"},
        {name:"IMG20220412182627",
        image: IMG20220412182627},
        {name:"I20171231_173650",
        image: I20171231_173650,
        orientation:"horizontal"},
        {name:"I20180122_162557",
        image: I20180122_162557,
        orientation:"horizontal"},
        {name:"I20180210_182107",
        image: I20180210_182107,
        orientation:"horizontal"},
        {name:"I20180322_175910",
        image: I20180322_175910,
        orientation:"horizontal"},
        {name:"I20180329_185235",
        image: I20180329_185235,
        orientation:"horizontal"},
        {name:"I20180513_183940",
        image: I20180513_183940,
        orientation:"horizontal"},
        {name:"I20180530_180848",
        image: I20180530_180848,
        orientation:"horizontal"},
        {name:"I20180630_183627",
        image: I20180630_183627,
        orientation:"horizontal"},
        {name:"I20180706_191554",
        image: I20180706_191554,
        orientation:"horizontal"},
        {name:"I20180728_180921",
        image: I20180728_180921,
        orientation:"horizontal"},
        {name:"I20180812_084300",
        image: I20180812_084300,
        orientation:"horizontal"},
        {name:"I20180909_065530",
        image: I20180909_065530,
        orientation:"horizontal"},
        {name:"I20190421_184016",
        image: I20190421_184016,
        orientation:"horizontal"},
        {name:"I20190513_185035",
        image: I20190513_185035,
        orientation:"horizontal"},
        {name:"I20190917_183310",
        image: I20190917_183310,
        orientation:"horizontal"},
        {name:"I20191110_065203",
        image: I20191110_065203,
        orientation:"horizontal"},
        {name:"IMG_20180331_183143",
        image: IMG_20180331_183143},
        {name:"IMG_20190421_183941",
        image: IMG_20190421_183941,
        orientation:"horizontal"},
        {name:"IMG_20190421_184015",
        image: IMG_20190421_184015,
        orientation:"horizontal"},
        {name:"IMG_20190421_185056",
        image: IMG_20190421_185056,
        orientation:"horizontal"},
        {name:"IMG_20210620_164734",
        image: IMG_20210620_164734,
        orientation:"horizontal"},
        {name:"IMG_20210711_175308",
        image: IMG_20210711_175308,
        orientation:"horizontal"}];
    
        // useEffect = () => {
        //     const fetchData = () => {
        //         fetch('images-data.json',
        //         {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         }).then(res => console.log(res))
        //         .catch(
        //             cons
        //         )
        //     }
        // }

    return(
        <div className="hobbies">
            <Moveback />
            <div className="hobbies__titles titles">Few of the shots</div>
            {images.map(image => <ImageView image={image.image} name={image.name} orientation={image.orientation}/>)}
        </div>
    )
}

export default Hobbies;