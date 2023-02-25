import Image from 'next/image'

import wordlit_feature from '../../public/wordlit_feature.png'
import wordlit_example_0 from '../../public/wordlit_example_0.png'
import wordlit_example_1 from '../../public/wordlit_example_1.png'
import wordlit_example_2 from '../../public/wordlit_example_2.png'


export default function Wordlit() {
    return (
        <>
            <div
                className="flex flex-col justify-center items-center text-left"
                style={{}}
            >

                <Image
                    src={wordlit_feature}
                    alt={"Cosmic Scramble feature graphic"}
                    className="sm:w-10/12 md:w-10/12 lg:w-8/12"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://play.google.com/store/apps/details?id=com.WordLit&hl=en_US&gl=US';
                    }}
                    className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white p-2 w-60 m-2"
                    style={{
                        borderRadius: '0.5vh',
                        borderWidth: 2,
                        borderColor: '#09e049',
                        opacity: 0.9,
                        position: 'relative',
                    }}
                >
                    <div>
                        <text
                            className="text-3xl font-oswald"
                            style={{
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            Download Now
                        </text>
                    </div>
                </button>
                <div className="flex flex-col sm:w-10/12 md:w-10/12 lg:w-8/12 mb-5">
                    <h2 className="text-3xl font-bold tracking-tight font-oswald my-5">
                        WORDLIT
                    </h2>
                    <h2 className="text-l font-bold tracking-tight font-subtext m-1">
                        The fast-paced game that tests your word-solving skills.
                    </h2>
                    <h2 className="text-l font-bold tracking-tight font-subtext m-1 text-yellow-400">
                        Has around 2,000 English words with definitions.
                    </h2>
                    <h2 className="text-l font-bold tracking-tight font-subtext m-1">
                        You'll be tasked with uncovering two hidden words by
                        guessing the correct letters. With only 12 guesses to work with, you'll need to
                        use your vocabulary skills and attention to detail to uncover the words and rack
                        up points. Need a little help? Click on the question marks to reveal a hint about the words' meanings.
                    </h2>
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center mb-5">
                    <Image
                        src={wordlit_example_0}
                        alt={"Wordlit example image"}
                        className="m-2"
                        style={{ borderRadius: '10px', width: '20vw' }}
                    />
                    <Image
                        src={wordlit_example_1}
                        alt={"Wordlit example image"}
                        className="m-2"
                        style={{ borderRadius: '10px', width: '20vw' }}
                    />
                    <Image
                        src={wordlit_example_2}
                        alt={"Wordlit example image"}
                        className="m-2"
                        style={{ borderRadius: '10px', width: '20vw' }}
                    />

                </div>


            </div>
        </>
    )
}