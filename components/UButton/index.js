import React, { Component, useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import Tick from './tick'
import './style.scss'
export default function UButton(props) {
    const { pending, success, error } = props
    const [showChild, setShowChild] = useState(true)
    const [successAnim, setSuccess] = useState(false)
    const [errorAnim, setError] = useState(false)
    useEffect(() => {
        if (!pending && !success && !error && !successAnim && !errorAnim)
            setShowChild(true)
        else {
            setShowChild(false)
        }
        if (success) {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                setShowChild(true)
            }, 2000);
        }
        else if (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
                setShowChild(true)
            }, 600);
        }
        return () => {
            //cleanup
        }
    }, [pending, success, error])
    const { type, variant } = props
    return (
        <Button className={`Ubutton`} variant={`${successAnim ? "success": errorAnim ? "danger": "primary"}`} disabled={pending} type={type} >
            {
                pending ?
                    <>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Loading...</span>
                    </> :
                    successAnim ?
                    <Tick />
                        :
                        errorAnim &&
                        <span className="Error">x</span>
            }
            {
                showChild &&
                props.children
            }
        </Button>
    )
}
