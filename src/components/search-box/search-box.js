import React, { useState, useEffect } from 'react';
import OnlineChallenge from '../../services/online-challenge';
import { useHistory, useLocation, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import { bindActionCreators } from 'redux';
import { Checkbox, Search, Select } from '..';
import Style from './search-box.module.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const MakersList = props => {
    let history = useHistory();
    let query = useQuery();
    let MakeID = query.get("MakeID") || 0;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await OnlineChallenge.getMakes();

            setData(result.data);
        }

        fetchData();
    }, []);

    const handleChange = event => {
        query.set("MakeID", event.currentTarget.value)
        query.delete("ModelID");
        query.delete("VersionID");

        history.push(`?${query.toString()}`);
    }

    return <label data-size={props.size} className="field-container">
        <select className={`select`} disabled={!data.length > 0} value={MakeID} onChange={handleChange}>
            <option value="0">Marca: Selecione</option>
            {
                data.map((item, idx) => {
                    return <option key={idx} value={item.ID}>{item.Name}</option>
                })
            }
        </select>
    </label>
}

const ModelsList = props => {
    const [data, setData] = useState([]);
    let history = useHistory();
    let query = useQuery();
    let MakeID = query.get("MakeID");
    let ModelID = query.get("ModelID");

    useEffect(() => {
        const fetchData = async (MakeID) => {
            const result = await OnlineChallenge.getModels(MakeID);

            setData(result.data);
        }

        if (Number(MakeID) > 0) fetchData(MakeID);
    }, [MakeID]);

    const handleChange = event => {
        query.set("ModelID", event.currentTarget.value)
        query.delete("VersionID");

        history.push(`?${query.toString()}`);
    }

    return <label data-size={props.size} className="field-container">
        <select className={`select`} disabled={!data.length > 0} value={ModelID || 0} onChange={handleChange}>
            <option>Modelos: Selecione</option>
            {
                data.map((item, idx) => {
                    return <option key={idx} value={item.ID}>{item.Name}</option>
                })
            }
        </select>
    </label>
}

const VersionsList = props => {
    const [data, setData] = useState([]);
    let history = useHistory();
    let query = useQuery();
    let ModelID = query.get("ModelID");
    let VersionID = query.get("VersionID");

    useEffect(() => {
        const fetchData = async (ModelID) => {
            const result = await OnlineChallenge.getVersions(ModelID);

            setData(result.data);
        }

        if (Number(ModelID) > 0) fetchData(ModelID);
    }, [ModelID]);

    const handleChange = event => {
        query.set("VersionID", event.currentTarget.value)

        history.push(`?${query.toString()}`);
    }

    return <label data-size={props.size} className="field-container">
        <select className={`select`} disabled={!data.length > 0 && !ModelID} value={VersionID || 0} onChange={handleChange}>
            <option>Modelos: Selecione</option>
            {
                data.map((item, idx) => {
                    return <option key={idx} value={item.ID}>{item.Name}</option>
                })
            }
        </select></label>
}

const SearchBox = props => {
    const getVehicles = async event => {
        event.preventDefault();

        const Page = 1;

        const result = await OnlineChallenge.getVehicles(Page);

        props.updateVehiclesList(result.data);
    }

    return <form onSubmit={getVehicles}>
        <div>
            <Checkbox label="Novos" disabled />
            <Checkbox label="Usados" disabled />
        </div>

        <div className={Style.group}>
            <Search disabled size="4" />
            <MakersList size="1" />
            <ModelsList size="1" />
        </div>

        <div className={Style.group}>
            <Select size="1" label="Ano Desejado" disabled />
            <Select size="1" label="Faixa de Preço" disabled />
            <VersionsList size="4" />
        </div>
        <div className={Style.footer}>
            <div className={Style.options}>
                <NavLink className={Style.link} to="/">Busca Avançada</NavLink>
                <button className={Style.reset} type="reset">Limpar filtros</button>
            </div>
            <button type="submit">Ver Ofertas</button>
        </div>
    </form>
}

const mapDispatchToProps = dispatch => {
    return {
        updateVehiclesList: bindActionCreators(action.updateVehiclesList, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);