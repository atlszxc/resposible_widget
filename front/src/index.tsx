import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import WidgetTemplates from './components/widgetTemplates';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { makeStore } from './store/store';
import WidgetDigitalPipelineForm from './components/widgetDigitalPipelineForm';

const queryClient = new QueryClient()

const Widget = {
    render() {
        return true;
    },

    init() {
        return true;
    },

    bind_actions() {
        return true;
    },

    dpSettings(work_area: string) {
        const rootElement: HTMLElement | null = document.getElementById(work_area)? document.getElementById(work_area) : null
        if(rootElement) {
            const root = ReactDOM.createRoot(rootElement)
            root.render(
                <Provider store={makeStore()}>
                    <WidgetDigitalPipelineForm />
                </Provider>
            )
        }
    },

    initMenuPage(work_area: string) {
        const rootElement: HTMLElement | null = document.getElementById(work_area)? document.getElementById(work_area) : null
        if(rootElement) {
            const root = ReactDOM.createRoot(rootElement)
            root.render(
                <QueryClientProvider client={queryClient}>
                    <Provider store={makeStore()}>
                        <WidgetTemplates />
                    </Provider>
                </QueryClientProvider>
            )
        }
    },

    settings() {
        return true;
    },

    advancedSettings() {
        return true;
    },

    onSave() {
        return true;
    },

    destroy() {
    },

    contacts_selected() {

    },

    leads_selected() {

    },

    tasks_selected() {

    }

};

export default Widget;