import React, { Component } from 'react'
import { Row, Col, Jumbotron } from 'react-bootstrap'
import './style.scss'
export default class Introduce extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Ben kimim?</h1>
                <p> Ben Onur Sarper Ekinci. 1997 yılında Keçiören/ANKARA'da doğdum. 
                    İlk öğretim ve lise hayatımı Kayseri, Antalya ve Gaziantep gibi farklı şehirlerde tamamladım.
                    2015 yılında İskenderun Teknik Üniversitesinde Bilgisayar mühendisliği bölümünü kazanarak, 2019 yılında mezun oldum.
                    Bilgisayar mühendisliğine gönül vermiş birisi olarak hayatıma devam ediyorum.
                     </p>
            </Jumbotron>
        )
    }
}
