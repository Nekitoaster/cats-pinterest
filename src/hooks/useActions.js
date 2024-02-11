import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import {actions} from '../stores/cats/favourites.slice'

const rootActions = {
    ...actions,
}

export const useActions = ()  => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}