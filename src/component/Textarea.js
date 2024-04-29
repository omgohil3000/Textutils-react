import React, { useState } from 'react'
import "./Textarea.css"

export default function Textarea(props) {
    const [text, setText] = useState("Enter Text Here")

    const handelupper = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handellower = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handelclear = () => {
        let newtext = "";
        setText(newtext)
    }

    const handler = (event) => {
        setText(event.target.value)
    }

    const handelspace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
    }



    const handelcamel = () => {
        let temp = text.split(" ")
        let newtext = []
        temp.forEach(e => {
            let firstletter = (e.charAt(0).toUpperCase())
            let otherletter = (e.slice(1))
            let mainstring = firstletter + otherletter
            newtext.push(mainstring)
        });
            setText(newtext.join(" "))
}

    let final = 0
    if (text === "") {
        final = 0
    }
    else {
        final = text.split(" ").length
    }


    return (
        <>
            <div className="container" >
                <div className="mb-3">
                    <div className="heading"><h3>{props.heading} </h3></div>
                    <textarea className="form-control" value={text} onChange={handler} id="exampleFormControlTextarea1" rows="5" ></textarea>
                </div>
                <button className="btn btn-primary custm" onClick={handelupper} > Convert To Upper</button>
                <button className="btn btn-primary custm" onClick={handellower} > Convert To Lower</button>
                <button className="btn btn-primary custm" onClick={handelclear} > Clear </button>
                <button className="btn btn-primary custm" onClick={handelspace} > Handel Space </button>
                <button className="btn btn-primary custm" onClick={handelcamel} > Camel Case </button>


                <div className="container">
                    <h4 className="count">Text Counts </h4>
                    <h6>Word:{final} </h6>
                    <h6>Caracter: {text.length}</h6>

                </div>

            </div>

        </>
    )
}
