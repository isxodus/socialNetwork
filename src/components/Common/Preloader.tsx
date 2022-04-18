import React from "react";
import preloader from "../../assets/preloader.svg";

type PreloaderType = {
    isFetching: boolean
}

export function Preloader(props: PreloaderType) {
    return props.isFetching ? <img src={preloader} alt="preloader"/> : <></>
}