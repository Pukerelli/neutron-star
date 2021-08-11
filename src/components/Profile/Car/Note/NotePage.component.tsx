import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectCarIsFetching, selectCurrentNote} from "../../../../selectors/cars/car.selector";
import {useHistory, useParams} from "react-router-dom";
import {selectAuthUser} from "../../../../selectors/auth/auth.selector";
import {useAppDispatch} from "../../../../store";
import {carCurrentNoteAction, carNoteReplaceAction} from "../../../../store/actions/car.action";
import {CarNote} from "./Layout/CarNote.component";
import {CarNoteFetching} from '../../../Common/Fetching/About.fetchingComponents';


export const CarNotePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const {note} = useParams<{ note: string }>()
    const currentNote = useSelector(selectCurrentNote)
    const isFetching = useSelector(selectCarIsFetching)
    const auth = useSelector(selectAuthUser)

    useEffect(() => {
        dispatch(carCurrentNoteAction(note))
    }, [note])

    const onBackClick = () =>
        history.push(`/profile/cars/about/${currentNote?.carname}`)

    const onSubmit = (values: { title: string, description: string }) =>
        dispatch(carNoteReplaceAction({...values, _id: note}))

    if (isFetching || !currentNote)
        return <CarNoteFetching/>

    return <CarNote currentNote={currentNote!} handler={onSubmit}
                    auth={auth} onBackClick={onBackClick} />
}





