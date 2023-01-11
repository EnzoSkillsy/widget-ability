import './App.css';
import {useEffect, useState} from "react";
import {modules/* as initModules*/} from "./data/modules";
import {questions as initQuestions} from "./data/questions";
import {Vortex} from "react-loader-spinner";

function App() {
    const [load, setLoad] = useState(false);
    const [result, setResult] = useState([]);
    const [questions, setQuestions] = useState(initQuestions);
    const [moduleNonRetenu, setModuleNonRetenu] = useState([]);
    const onSubmit = () => {
        let inputs = document.querySelectorAll('input[type=radio]:checked');
        if (inputs.length === Object.keys(questions).length) {
            setLoad(true)
            inputs.forEach((input) => {
                if (input.value.includes("MODULE_") && modules[input.value]) {
                    console.log(input.value)
                    console.log(modules[input.value])
                    if (!result.find(element => element.module === input.value)) {
                        console.log("push")
                        let a = result;
                        a.push(modules[input.value])    // result.push(modules[input.value])
                        setResult(a)
                    }
                }
            })
        }else{
            alert("Veuillez répondre à toutes les questions")
            return 0
        }
        let mo = Object.values(modules).filter(e => !result.includes(e))
        setModuleNonRetenu(mo)
        console.log(result)
    }
    setTimeout(() => {
        setLoad(false)
    }, 1000)

    return (
        <>
            {
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
                    : result.length === 0 ?

                        <div className="flex justify-center w-full">
                            <div>
                                <table className={'w-full border-separate border-spacing-2'}>
                                    <thead>
                                    <tr className={'mb-4'}>
                                        <th className={'text-start'}></th>
                                        <th>Oui</th>
                                        <th>Non</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {Object.keys(questions).map((ques, index) => (
                                        <tr key={index}>
                                            <td>{questions[ques].question}</td>
                                            {questions[ques].reponses.map((reponse, index) => (
                                                <td className={'text-center'} key={index}>
                                                    <input type="radio" name={ques} value={reponse.target}/>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className={'flex w-full justify-end  mt-2'}>
                                    <button className={'bg-blue-500 text-white px-4 py-2 rounded'}
                                            onClick={() => onSubmit()}>Valider
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            {result.length > 0 ?
                                <div className={'w-full flex justify-center'}>
                                    <div>
                                        <h1 className={'text-center text-2xl mb-5'}>Les HR Box qui vous intéresses</h1>
                                        <div className={'modules'}>
                                            {result.map((el, index) => (
                                                <div key={el.titre}
                                                     className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-48 w-full object-cover" src={el.img} alt=""/>
                                                    </div>
                                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                                        <div className="flex-1">
                                                            <div className="mt-2 h-[140px] overflow-hidden block">
                                                                <p className="text-xl font-semibold text-gray-900">{el.titre}</p>
                                                                <p className="mt-3  text-gray-500">{el.sousTitre}</p>
                                                            </div>
                                                        </div>
                                                        <div className="mt-6 flex items-center">
                                                            <div className="flex-shrink-0">
                                                                <p className="text-xl font-semibold text-gray-900">{el.price}Є</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                : null}
                            {moduleNonRetenu.length > 0 ?
                                <div className={'w-full flex justify-center mt-10'}>
                                    <div>
                                        <h1 className={'text-center text-2xl mb-5'}>Modules qui peuvents vous intéresser </h1>
                                        <div className={'modules'}>

                                        {moduleNonRetenu.map((el, index) => (
                                            <div key={el.titre}
                                                 className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                                <div className="flex-shrink-0">
                                                    <img className="h-48 w-full object-cover" src={el.img} alt=""/>
                                                </div>
                                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                                    <div className="flex-1">
                                                        <div className="mt-2 h-[140px] overflow-hidden block">
                                                            <p className="text-xl font-semibold text-gray-900">{el.titre}</p>
                                                            <p className="mt-3  text-gray-500">{el.sousTitre}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <p className="text-xl font-semibold text-gray-900">{el.price}Є</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
            }
        </>

    );
}

export default App;
