import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tabs, SearchBox } from '../../components';
import Style from './navigation.module.scss';
import { ReactComponent as IconCar} from './car-solid.svg';
import { ReactComponent as IconMotorcycle} from './motorcycle-solid.svg';

const Navigation = () => {
    return <nav role="navigation" aria-label="Main" className={Style.navigation}>
        <NavLink to="/vender-meu-carro" className={Style.link}>Vender meu carro</NavLink>

        <Tabs.Wrapper>
            <Tabs.List>
                <Tabs.Button icon={<IconCar />} selected id="car">
                    Comprar <strong>Carro</strong>
                </Tabs.Button>
                <Tabs.Button icon={<IconMotorcycle />} id="motorcycle">
                    Comprar <strong>Moto</strong>
                </Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="car">
                <SearchBox />
            </Tabs.Panel>
        </Tabs.Wrapper>
    </nav>
}

export default Navigation;