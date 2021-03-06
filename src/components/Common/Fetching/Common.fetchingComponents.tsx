import React from "react";
import ContentLoader from "react-content-loader";
import {WhiteCard} from "../../../styles/StyledComponents/Common/Common.styledComponents";
import {UserAvatarColumn} from "../../../styles/StyledComponents/Common/ProfileLayout.styledComponents";


export const CommonFetching: React.FC<IFetchBlock> = ({width, height, x, y}) => (
    <ContentLoader height={height} width={width}>
        <rect x={x || '0'} y={y || '0'} rx="6" ry="6" height={height} width={width}/>
    </ContentLoader>
)

export const AvatarBlockFetching: React.FC = () => (
    <UserAvatarColumn>
        <CommonFetching width='100%' height='350'/>
        <CommonFetching width='100%' height='120'/>
    </UserAvatarColumn>
)

export const CardsFetching: React.FC = () => (
    <>
        <CardFetching/>
        <CardFetching/>
        <CardFetching/>
        <CardFetching/>
    </>
)

export const CardFetching: React.FC = () => (
    <WhiteCard height='220px' width='100%' padding='7px 7px 7px 15px'>
        <ContentLoader height='100%' width='100%'>
            <rect x="10" y="10" rx="6" ry="6" width='45%' height='35'/>
            <rect x="70%" y="5" rx="6" ry="6" width='30%' height='120'/>
            <rect x="70%" y="150" rx="5" ry="5" width="30%" height='20'/>
            <rect x="15" y="55" rx="5" ry="5" width="30%" height='20'/>
            <rect x="15" y="85" rx="5" ry="5" width="30%" height='20'/>
            <rect x="15" y="115" rx="5" ry="5" width="30%" height='20'/>
            <rect x="15" y="145" rx="5" ry="5" width="30%" height='20'/>
            <rect x="15" y="175" rx="5" ry="5" width="30%" height='20'/>
        </ContentLoader>
    </WhiteCard>
)

interface IFetchBlock {
    width: string
    height: string
    x?: string
    y?: string
}