import React from 'react' 
//import React, { useState, useEffect } from 'react';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';


export const Dashboard = () => {

{/*
        const stackedData = {
            labels: ['Produccion', 'Administrativo', 'Comercial', 'Direcciones Regionales', 'Direccion General', 'Mantenimiento'],
     
            datasets: [{
                type: 'horizontalBar',
                label: 'Sin Iniciar',
                backgroundColor: '#ef6262',
                data: [4173, 1244, 601, 532, 75, 79 ]
            }, {
                type: 'horizontalBar',
                label: 'Proceso',
                backgroundColor: '#FFA726',
                data: [ 351, 126, 59, 56, 13, 7 ]
            }, {
                type: 'horizontalBar',
                label: 'Cerradas',
                backgroundColor: '#66BB6A',
                data: [369, 89, 40, 33, 3, 3 ]
            }]
        };
    
        const getLightTheme = () => {
            let stackedOptions = {
                tooltips: { 
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            fontColor: '#495057'
                        },
                        gridLines: {
                            color: '#ebedef'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            fontColor: '#495057'
                        },
                        gridLines: {
                            color: '#ebedef'
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: '#495057'
                    }
                }
            };
    
    
            return {
                stackedOptions
             }
        } */}
    
//     useEffect(() => {
//      const productService = new ProductService();
//      const eventService = new EventService();
//      productService.getProductsSmall().then(data => setProducts(data));
//      eventService.getEvents().then(data => setEvents(data));
//    }, []);
//
//    const onTaskCheckboxChange = (e) => {
//        let selectedTasks = [...tasksCheckbox];
//        if (e.checked)
//            selectedTasks.push(e.value);
//        else
//            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);
//
//        setTasksCheckbox(selectedTasks);
//    };
//    const { stackedOptions } = getLightTheme()

    return (
           <div className="p-grid p-fluid dashboard">
{/*                <div className="card summary">
                    <span className="title">Reportadas</span>
                    <span className="detail">Horas/Dia</span>
                    <span className="count visitors">6,428</span>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="card summary">
                    <span className="title">Totales</span>
                    <span className="detail">Hora/Dia</span>
                    <span className="count purchases">67,212</span>
                </div>
            </div>
            <div className="p-col-12 p-lg-4">
                <div className="card summary">
                    <span className="title">Reporte</span>
                    <span className="detail">Avance Parcial</span>
                    <span className="count revenue">9.56%</span>
                </div>
            </div> */}

            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{ backgroundColor: '#007be5', color: '#00448f' }}><span>TR</span></div>
                    <div className="highlight-details ">
                        <i className="pi pi-search"></i>
                        <span>Encuestas</span>
                        <span className="count">7,853</span>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{ backgroundColor: '#ef6262', color: '#a83d3b' }}><span>PE</span></div>
                    <div className="highlight-details ">
                        <i className="pi pi-exclamation-triangle"></i>
                        <span>Sin Iniciar</span>
                        <span className="count">6,704</span>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{ backgroundColor: '#f9c851', color: '#b58c2b' }}><span>PR</span></div>
                    <div className="highlight-details ">
                        <i className="pi pi-spinner"></i>
                        <span>Proceso</span>
                        <span className="count">612</span>
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-md-6 p-xl-3">
                <div className="highlight-box">
                    <div className="initials" style={{ backgroundColor: '#20d077', color: '#038d4a' }}><span>OK</span></div>
                    <div className="highlight-details ">
                        <i className="pi pi-check"></i>
                        <span>Cerradas</span>
                        <span className="count">537</span>
                    </div>
                </div>
            </div>

{/*}
            <div className="p-col-12 p-md-8 p-lg-9 p-fluid ">
                <Panel header="Avances por Departamento">
            <div className="p-grid-2">
                <Chart type="horizontalBar" data={stackedData} options={stackedOptions} />
            </div>
           </Panel>
        </div> */}



            <div className="p-col-12 p-md-6 p-lg-3 p-fluid contact-form">
                <Panel header="Acciones">
                    <div className="p-grid">
                    <div className="p-col-12">
                            <Button type="button" label="Refrescar Datos" icon="pi pi-refresh" />
                        </div>
                        <div className="p-col-12">
                            <Button type="button" label="Descargar Informe" icon="pi pi-cloud-download" />
                        </div>
                    </div>
                </Panel>
            </div>


        </div>
    );
}
