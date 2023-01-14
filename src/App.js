import './styles.scss';
import Masonry from "./Masonry";

function App() {
    return (
        <div>
            <div className="imgLoader"></div>

            <div className="container">

                <h1 className="title">
                    Portfolio of Theresa Mostert
                </h1>
                <h2 className="subtitle">Portraits</h2>

                <div className="book">
                    <div className="gap"></div>
                    <div className="pages">
                        <div className="page"></div>
                        <div className="page"></div>
                        <div className="page"></div>
                        <div className="page"></div>
                        <div className="page"></div>
                        <div className="page"></div>
                    </div>

                    <div className="flips">
                        <div className="flip flip1">
                            <div className="flip flip2">
                                <div className="flip flip3">
                                    <div className="flip flip4">
                                        <div className="flip flip5">
                                            <div className="flip flip6">
                                                <div className="flip flip7">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Thumbnails/>*/}


            <div className="thumbnails">
                &#169; Theresa Mostert Photography 2023
            </div>

            <Masonry/>
        </div>
    );
}

export default App;
