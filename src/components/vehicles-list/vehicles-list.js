import React from 'react';
import { connect } from 'react-redux'
import Style from './vehicles-list.module.scss';

const Card = props => {
    const toCurrency = value => {
        value = Number(value.replace(',', '.'));

        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
    }

    return <div className={Style.card}>
        <div className={Style.cover}>
            <img alt={`${props.Make} ${props.Model} ${props.YearFab}`} src={props.Image} />
        </div>
        <div className={Style.content}>
            <div className={Style.description}>
                <h2>{`${props.Make} ${props.Model}`}</h2>
                <h3>{props.Version}</h3>
            </div>

            <div className={Style.info}>
                <strong className={Style.price}>{toCurrency(props.Price)}</strong>
                <div className={Style.detail}>
                    <span>{`${props.YearFab}/${props.YearModel}`}</span>
                    <span>{`${props.KM} km`}</span>
                </div>
            </div>
        </div>
    </div>
}

const VehiclesList = props => {
    return <div className={Style.wrapper}>
        {
            props.vehicles?.map((item, idx) => {
                return <Card {...item} key={idx} />
            })
        }
    </div>
}

const mapStateToProps = state => {
    return {
        vehicles: state.vehicles.list
    }
}

export default connect(mapStateToProps, null)(VehiclesList);