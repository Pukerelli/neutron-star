import {Form, Formik} from 'formik';
import React from 'react';
import {addCarValidation} from "../../../../common/validations";
import {CancelBtn, CommonBtn} from '../../../../styles/StyledComponents/Buttons/CommonButtons.styledComponent';
import {InputForm} from "../../../Common/Forms/Forms.component";
import {
    AddCarBtnContainer,
    AddCarFormContainer,
    AddCarLayout, AddCarLeftBottom,
    AddCarLeftColumn,
    AddCarRightColumn,
    CarPhotoContainer,
    CarPhotoInputContainer,
    ErrorContainer
} from "../../../../styles/StyledComponents/Cars/Add/AddCar.styledComponents";
import carDefault from "../../../../common/images/carDefault.jpg";
import {ICar, IError} from "../../../../common/interfaces/index.interface";
import {ImgCommon, Name} from "../../../../styles/StyledComponents/Common/Common.styledComponents";
import userDefault from "../../../../common/images/userDefault.png";


interface IProps {
    onSubmit: (values: any) => void
    errors: IError
    car?: ICar
    onCancel: () => void
}

export const AddCarForm: React.FC<IProps> = ({onSubmit, errors, car, onCancel}) => {

    const initialValues = {
        name: car?.name || '',
        brand: car?.brand || '',
        model: car?.model || '',
        generation: car?.generation || '',
        year: car?.year || '',
        engine: car?.engine || '',
        hp: car?.hp || '',
        doors: car?.doors || '',
        mileage: car?.mileage || '',
        ownTime: car?.ownTime || '',
        location: car?.location || '',
        color: car?.color || '',
        rims: car?.rims || '',
        photo: car?.photo || ''
    }

    return (
        <AddCarLayout>
            <Formik initialValues={initialValues} validationSchema={addCarValidation} onSubmit={onSubmit}>
                {({
                      values,
                  }) => (
                    <Form>
                        <AddCarFormContainer>
                            <AddCarLeftColumn>
                                {
                                    car?.name
                                        ? <Name>{car?.name}</Name>
                                        : <InputForm label='name' name='name' type='text' placeholder='nickname'/>
                                }
                                <ErrorContainer>{(errors || 'string' === typeof errors) && errors}</ErrorContainer>
                                <InputForm label='brand' name='brand' type='text' placeholder='brand'/>
                                <InputForm label='model' name='model' type='text' placeholder='model'/>
                                <InputForm label='generation' name='generation' type='text' placeholder='generation'/>
                                <InputForm label='year' name='year' type='text' placeholder='year'/>
                                <InputForm label='engine' name='engine' type='text' placeholder='engine'/>
                                <InputForm label='hp' name='hp' type='text' placeholder='hp'/>
                            </AddCarLeftColumn>
                            <CarPhotoContainer>
                                <ImgCommon onError={e => e.currentTarget.src = carDefault}
                                           src={values.photo || carDefault}/>
                            </CarPhotoContainer>
                            <AddCarLeftBottom>
                                <InputForm label='doors' name='doors' type='text' placeholder='doors count'/>
                                <InputForm label='color' name='color' type='text' placeholder='yellow'/>
                                <InputForm label='rims' name='rims' type='text' placeholder='Rays Volk CE28'/>
                                <InputForm label='ownTime' name='ownTime' type='text' placeholder='in years'/>
                            </AddCarLeftBottom>
                            <AddCarRightColumn>
                                <CarPhotoInputContainer>
                                    <InputForm label='photo' name='photo' type='photo' placeholder='Image url'/>
                                </CarPhotoInputContainer>
                                <InputForm label='location' name='location' type='text' placeholder='car location'/>
                                <InputForm label='mileage' name='mileage' type='text'
                                           placeholder='mileage in kilometers'/>
                            </AddCarRightColumn>
                            <AddCarBtnContainer>
                                <CommonBtn type={"submit"} width='100%' height='40px'>
                                    Confirm
                                </CommonBtn>
                            </AddCarBtnContainer>
                            <AddCarBtnContainer>
                                <CancelBtn onClick={onCancel} type='button' width='100%' height='40px'>
                                    Cancel
                                </CancelBtn>
                            </AddCarBtnContainer>
                        </AddCarFormContainer>
                    </Form>
                )}
            </Formik>
        </AddCarLayout>
    );
};
