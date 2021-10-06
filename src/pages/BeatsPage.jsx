import React, {useState} from 'react';
import {
    Button,
    Container,
    InputGroup,
    FormControl,
    Form,
} from "react-bootstrap"
import Footer from "../components/Footer";
import BeatList from "../components/BeatList";
import Player from "../components/AudioPlayer";
import {motion} from "framer-motion"





const BeatsPage = () => {
    const [beat, setBeat] = useState("")
    const [showPlayer, setShowPlayer] = useState(false)

    const {search} = window.location;
    const query  = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const selectedBeat =(beat)=>{
        setBeat(beat);
        setShowPlayer(true);

    }

    return (
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <div id={"main-content"}>


             <Container className={'mt-5'}>
                 <div className="searchbar">
                     <Form>
                         <div className={"d-flex justify-content-center main-search beat-search"}>
                             <InputGroup>
                                 <FormControl
                                     type="search"
                                     placeholder="What are you looking for?"
                                     aria-label="beats-query-search"
                                     aria-describedby="basic-addon2"
                                     onChange={e => setSearchQuery(e.target.value)}

                                 />
                             </InputGroup>
                             <button>
                                 <i className="fa fa-search">

                                </i>
                            </button>
                        </div>
                    </Form>
                </div>
                <div className="beatslist">
                    <BeatList searchQuery={searchQuery} selectedBeat={selectedBeat}/>
                    <div className={'show-more'}>
                        <Button className={'mt-5 mb-5 button-2'}>
                            Browse All Tracks
                        </Button>
                    </div>
                </div>
            </Container>
                {showPlayer ? <Player beat={beat} />: null}

            </div>
            <Footer/>


         </motion.div>

    );
}

export default BeatsPage;