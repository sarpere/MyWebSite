import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
export default class Languages extends Component {
    render() {
        const pathPrefix = "/icons/languages/";
        const Langs = {
            "Front-End": [
                { alt: "ReactJs", src: 'react.svg' },
                { alt: "Redux", src: 'redux.svg' },
                { alt: "NextJs", src: 'nextjs.svg' },
                { alt: "VueJs", src: 'vuejs.svg' },
                // { alt: "PugJs", src: 'pug.svg' },
                { alt: "Javascript", src: 'javascript.svg' },
                { alt: "HTML", src: 'html.svg' },
                { alt: "Jquery", src: 'jquery.svg' },
                { alt: "sass", src: 'sass.svg' },
                { alt: "css3", src: 'css3.svg' },
                { alt: "bootstrap", src: 'bootstrap.svg' }
            ],
            "Back-End": [
                { alt: "Python", src: 'python.svg' }
            ],
            "Database": [
                { alt: "Mysql", src: 'mysql.svg' },
                { alt: "Microsoft Sql Server", src: 'mssql.svg' },
                { alt: "SqlLite", src: 'sqlite.svg' },
            ],
            "Exrta Tools": [
                { alt: "github", src: 'github.svg' },
                { alt: "Bitbucket", src: 'bitbucket.svg' },
                { alt: "Zeplin", src: 'zeplin.svg' },
            ]
        }

        return (
            <Jumbotron>
                {
                    Object.keys(Langs).map((Thecnologies, tkey) =>
                        <div key={tkey} className="Thecnologies">
                            <h1>{Thecnologies}</h1>
                            <div className="LanguageContainer">
                                {
                                    Langs[Thecnologies].map((Lang, lkey) =>
                                        <LazyLoad key={lkey}>
                                            <img  {...Lang} src={pathPrefix + Lang.src} />
                                        </LazyLoad>

                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </Jumbotron>
        )
    }
}
