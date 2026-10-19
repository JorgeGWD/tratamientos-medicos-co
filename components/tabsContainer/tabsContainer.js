import React, { useState } from 'react'
import TabManager from './tabs/tabs'
import TabsContent from './tabsContent/tabsContent';

const TabsContainer = ({ data }) => {

    const [ activeTab, setActiveTab ] = useState(1);

    return (
        <div className="tabs-container">
            <TabManager data={data} activeTab={activeTab} handleTab={setActiveTab} />
            <TabsContent data={data} activeTab={activeTab} />
        </div>
    )
}

export default TabsContainer
