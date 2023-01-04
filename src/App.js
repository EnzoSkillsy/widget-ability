import './App.css'
import {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import img from './media/image 5.png'
import {Vortex} from "react-loader-spinner";
import ProgressBar from "./components/ProgressBar";
import {questions} from './data/questions.js'
import {modules} from './data/modules.js'
import {CheckIcon} from '@heroicons/react/20/solid'
import {offres} from './data/offres.js'


const App = () => {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    const [load, setLoad] = useState(false)
    const [results, setResults] = useState([])
    const [newResult, setNewresult] = useState([])
    const [moduleNonRetenu, setModuleNonRetenu] = useState([])
    const [currentQuestion, setCurrentQuestions] = useState(questions.first)
    const [tour, setTour] = useState(1)

    const handleChange = (e) => {
        let a = document.querySelector('input:checked')
        let b = document.querySelector('input[type=radio]:not(:checked)')
        if (tour <= Object.keys(questions).length) {
            if (a.value.includes("END")) {
                let m = a.value.split(' ')
                m.map((el) => {
                    if (el.includes('MODULE_')) {
                        if (!newResult.includes(modules[el])) {
                            setNewresult([...newResult, modules[el]]);
                        }
                    }
                    return 0;
                })
                setLoad(true)
                setTimeout(() => {
                    setLoad(false)
                    setResults(newResult)
                    let mo = Object.values(modules).filter(e => !newResult.includes(e))
                    setModuleNonRetenu(mo)
                    setTour(tour + 1)
                }, "2500")
            } else if (a.value.includes('MODULE_')) {
                let m = a.value.split(' ')
                m.map((el) => {
                    if (!newResult.includes(modules[el])) {
                        setNewresult([...newResult, modules[el]]);
                    }
                    return 0;
                })
                setCurrentQuestions(questions[b.value])
                setTour(tour + 1)
                setTimeout(() => {
                    a.checked = false
                }, 150)
                setInProp(false)
            } else {
                setInProp(false)
                setCurrentQuestions(questions[a.value])
                setTour(tour + 1)
                setTimeout(() => {
                    a.checked = false
                }, 150)
            }
        }
    }

    useEffect(() => {
        setInProp(true)
    }, [currentQuestion])
    let step = tour >= Object.keys(questions).length ? Object.keys(questions).length : tour;
    return (
        <div style={{overflow: "hidden"}}>
                {results.length === 0 && moduleNonRetenu.length === 0 && load === false ?
                    <div className={'flex w-full justify-items-center justify-center items-center h-full'}>
                        <div className={'w-full'}>
                            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="my-node">
                                <div ref={nodeRef}>
                                    <h1 className={'text-xl sm:text-3xl mb-7 whitespace-nowrap'}
                                        style={{color: 'rgb(64, 151, 170)'}}>{currentQuestion.question} {step}/{Object.keys(questions).length}</h1>
                                    {currentQuestion.reponses.map((element, index) =>
                                        <div key={index} id={'quiz'} style={{marginBottom: "20px"}}
                                             onChange={handleChange}>
                                            <input type="radio" style={{width: '20px', height: '20px'}}
                                                   id={element.target}
                                                   name="quiz" value={element.target}/>
                                            <label
                                                style={{fontSize: '20px', marginLeft: '2em', color: 'rgb(94, 94, 94)'}}
                                                htmlFor="huey">{element.reponse}</label>
                                        </div>
                                    )}
                                </div>
                            </CSSTransition>
                            <ProgressBar bgcolor={'rgb(64, 151, 170)'}
                                         completed={step * 100 / Object.keys(questions).length}/>
                        </div>

                    </div>
                    :
                    load ?
                        <div style={{
                            display: "flex",
                            justifyContent: 'center',
                            width: "100%",
                            alignItems: 'center'
                        }}>
                            <p style={{fontSize: "24px", color: "rgb(64, 151, 170)"}}>Merci d'avoir répondu à ce
                                questionnnaire, nous recherchons les meilleures offres pour vous...</p>
                            <Vortex
                                visible={load}
                                height="80"
                                width="80"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['rgb(64, 151, 170)', 'rgb(105, 198, 203)', 'rgb(51, 84, 109)', 'rgb(64, 151, 170)', 'rgb(105, 198, 203)', 'rgb(51, 84, 109)']}
                            />
                        </div>
                        : results.length > 0 ?
                            <div className={'two-column '}>
                                <div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}>
                                        <h1 className={'text-3xl my-5'} style={{textAlign: "center"}}>Optez pour HR box qui
                                            vous convient</h1>
                                    </div>
                                    <div className={results.length !== 1 ? 'modules' : 'modules2'}>
                                        {results.map((el, index) => (
                                            <a key={index} href="#"
                                               className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                                <div className="relative pb-48 overflow-hidden">
                                                    <img className="absolute inset-0 h-full w-full object-cover"
                                                         src={el.img}
                                                         alt=""/>
                                                </div>
                                                <div className="p-4">
                                                    <div className={'bande rounded'}
                                                         style={{backgroundColor: el.color}}></div>
                                                    <h2 className="mt-2 mb-2  font-bold">{el.titre}</h2>
                                                    <p className="text-sm h-[60px] text-ellipsis overflow-hidden">{el.sousTitre}</p>
                                                    <div className="mt-3 flex items-center">
                                                        <span className="font-bold text-xl">{el.price}</span>&nbsp;
                                                        <span className="text-sm font-semibold">€/HT*</span>
                                                    </div>
                                                </div>
                                                <div className="p-4 border-t border-b text-xs text-gray-700">
                                                    <a
                                                        href={"#"}
                                                        className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                                                    >
                                                        Ajouter au panier
                                                    </a>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    {moduleNonRetenu.length > 0 ?
                                        <>
                                            <h1 className={'text-3xl my-5'} style={{textAlign: "center"}}>Les HR box qui
                                                peuvent vous intérésser</h1>
                                            <div className={moduleNonRetenu.length === 1 ? 'modules2': 'modules'}>
                                                {moduleNonRetenu.map((el, index) =>
                                                    <a key={index} href=""
                                                       className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                                        <div className="relative pb-48 overflow-hidden">
                                                            <img className="absolute inset-0 h-full w-full object-cover"
                                                                 src={el.img}
                                                                 alt=""/>
                                                        </div>
                                                        <div className="p-4">
                                                            <div className={'bande rounded'}
                                                                 style={{backgroundColor: el.color}}></div>
                                                            <h2 className="mt-2 mb-2  font-bold">{el.titre}</h2>
                                                            <p className="text-sm h-[60px] text-ellipsis overflow-hidden">{el.sousTitre}</p>
                                                            <div className="mt-3 flex items-center">
                                                                <span className="font-bold text-xl">{el.price}</span>&nbsp;
                                                                <span className="text-sm font-semibold">€</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 border-t border-b text-xs text-gray-700">
                                                            <a
                                                                href={"#"}
                                                                className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                                                            >
                                                                Ajouter au panier
                                                            </a>
                                                        </div>
                                                    </a>
                                                )}
                                            </div>
                                        </>
                                        :
                                        null
                                    }
                                </div>
                                <div className={'w-full'}>
                                    <h1 className={'text-3xl my-5'} style={{textAlign: "center"}}>Ou souscrivez à un de
                                        nos packs</h1>
                                    <div
                                        className="prices">
                                        {offres.map((tier) => (
                                            <div key={tier.name}
                                                 className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                                                <div className="p-6">
                                                    <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                                                    <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                                    <p className="mt-8">
                                                            <span
                                                                className="text-xl lg:text-3-xl font-bold tracking-tight text-gray-900">{tier.price} €<span className={'text-sm'}>/HT</span></span>{' '}
                                                    </p>
                                                    <a
                                                        href={tier.href}
                                                        className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                                                    >
                                                        Buy {tier.name}
                                                    </a>
                                                </div>
                                                <div className="px-6 pt-6 pb-8">
                                                    <h3 className="text-sm font-medium text-gray-900">What's
                                                        included</h3>
                                                    <ul role="list" className="mt-6 space-y-4">
                                                        {tier.includedFeatures.map((feature) => (
                                                            <li key={feature} className="flex space-x-3">
                                                                <CheckIcon
                                                                    className="h-5 w-5 flex-shrink-0 text-green-500"
                                                                    aria-hidden="true"/>
                                                                <span className="text-sm text-gray-500">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <h1 className={'text-3xl'} style={{textAlign: "center"}}>Les HR box qui peuvent vous
                                    intérésser</h1>
                                <div className={'modules'}>
                                    {moduleNonRetenu.map((el, index) =>
                                        <a href=""
                                           className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                            <div className="relative pb-48 overflow-hidden">
                                                <img className="absolute inset-0 h-full w-full object-cover"
                                                     src={el.img}
                                                     alt=""/>
                                            </div>
                                            <div className="p-4">
                                                <div className={'bande rounded'} style={{backgroundColor: el.color}}></div>
                                                <h2 className="mt-2 mb-2  font-bold">{el.titre}</h2>
                                                <p className="text-sm h-[60px] text-ellipsis overflow-hidden">{el.sousTitre}</p>
                                                <div className="mt-3 flex items-center">
                                                    <span className="font-bold text-xl">{el.price}</span>&nbsp;
                                                    <span className="text-sm font-semibold">€</span>
                                                </div>
                                            </div>
                                            <div className="p-4 border-t border-b text-xs text-gray-700">
                                                <a
                                                    href={"#"}
                                                    className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                                                >
                                                    Ajouter au panier
                                                </a>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </>
                }
        </div>
    )
}

export default App;
