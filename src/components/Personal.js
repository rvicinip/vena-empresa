/*
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import { InputText } from 'primereact/inputtext';
import { ProgressBar } from 'primereact/progressbar';
*/

//import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
//import { Toast } from 'primereact/toast';
import { ServicioPersonal } from "../services/ServicioPersonal";
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';

//import { Rating } from 'primereact/rating';
//import { Toast } from 'primereact/toast';

export const Personal = () => {
    const [personal, setPersonal] = useState(null);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [globalFilterPersonal, setGlobalFilterPersonal] = useState("");
    const [loadingPersonal, setLoadingPersonal] = useState(true);

    useEffect(() => {
        const servicioPersonal = new ServicioPersonal();
        servicioPersonal.getPersona().then((data) => {
            setPersonal(data);
            setLoadingPersonal(false); 
        });
    }, []);

    //  TABLA DE PERSONAL

    const personalTableHeader = (
        <div className="table-header style={{font-size: 30px}}">
            Lista de Personal
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterPersonal} onChange={(e) => setGlobalFilterPersonal(e.target.value)} placeholder="Global Search" />
            </span>
        </div>
    );

    const idBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {data.Id}
            </>
        );
    };

    const nombreBodyTemplate = (data) => {
        var todoNombre = data.Apellido.concat(" ", data.Nombre);
        return (
            <>
                <span className="p-column-title"></span>
                {todoNombre}
            </>
        );
    };

    const formatCurrency = (value) => {
        return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    };
    const salarioBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {formatCurrency(data.Salario)}
            </>
        );
    };

    const jornadaBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {data.Jornada}
            </>
        );
    };

    const tipoJornadaBodyTemplate = (data) => {
        const iconTipoJornada = data.TipoJornada === "Diurna" ? "pi pi-sun" : "pi pi-moon";

        return (
            <>
                <span className="p-column-title"></span>
                <span className={iconTipoJornada} />
            </>
        );
    };

    const emailBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {data.email}
            </>
        );
    };

    const centroCostosBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {data.CentroCostos}
            </>
        );
    };

    const terminoBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {data.Termino}
            </>
        );
    };

    const cargoBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title"></span>
                {data.cargo}
            </>
        );
    };

    const activityBody = (data) => {
        var resultado = data.Horas.concat(" %")
        return (

            <>
                <span className="p-column-title"></span>
                {resultado}
            </>
        );
    };

/*    const countries = [
        {name: 'Sin Iniciar', icon: "pi pi-exclamation-triangle", 'code': 'PE'}, 
        {name: 'Proceso', icon: "pi pi-spinner", code: 'PR'},
        {name: 'Cerrada', icon: "pi pi-check", code: 'OK'}] */


    const statusBodyTemplate = (data) => {
        function icono(c, e) {
            if (c === "T") return "pi pi-check";
            else {
                if (e > 0) return "pi pi-spinner";
                else return "pi pi-exclamation-triangle";
            }
        }
        return (
            <>
                <span className="p-column-title"></span>
                <span className={icono(data.Terminado, data.Horas)} />
            </>
        );
    };
    
    const actionTemplate = () => <Button type="button" icon="pi pi-external-link" className="p-button-secondary" onClick={() =>('displayBasic2')}></Button>;
    /*
               actionTemplate = () => <Button label="Long Content" icon="pi pi-external-link" onClick={() => onClick('displayBasic2')} />
                <Dialog header="Header" visible={displayBasic2} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br />
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <br />
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br />
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <br />
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    <br />
                </Dialog>



    */

    return (
        <div className="p-grid table-demo">
            <div className="card">
                <h5>Cooperativa ISA s.a.</h5>
                <DataTable
                    value={personal}
                    paginator
                    className="p-datatable-responsive  p-datatable-sm style={{ font-size: 12px }}"
                    rows={50}
                    dataKey="Id"
                    rowHover
                    selection={selectedPerson}
                    onSelectionChange={(e) => setSelectedPerson(e.value)}
                    globalFilter={globalFilterPersonal}
                    emptyMessage="No hay personas."
                    loading={loadingPersonal}
                    header={personalTableHeader}
                >
                    <Column headerStyle={{ width: "8rem", textAlign: "center" }} bodyStyle={{ textAlign: "center", overflow: "visible" }} body={actionTemplate}></Column>
                    <Column field="Terminado" header="St" headerStyle={{ width: "40px" }} sortable body={statusBodyTemplate}></Column>
                    <Column field="Horas" header="FTE" headerStyle={{ width: "80px" }} sortable body={activityBody}></Column>
                    <Column field="Id" header="Id" headerStyle={{ width: "100px" }} sortable body={idBodyTemplate}></Column>
                    <Column field="Nombre" header="Nombre" headerStyle={{ width: "120px" }} sortable body={nombreBodyTemplate}></Column>
                    <Column field="Salario" header="Salario" headerStyle={{ width: "80px" }} sortable body={salarioBodyTemplate}></Column>
                    <Column field="Jornada" header="Hrs" headerStyle={{ width: "40px" }} sortable body={jornadaBodyTemplate}></Column>
                    <Column field="TipoJornada" header="Tipo  Jorn" headerStyle={{ width: "70px" }} sortable body={tipoJornadaBodyTemplate}></Column>
                    <Column field="email" header="Correo Electrónico" headerStyle={{ width: "230px" }} sortable body={emailBodyTemplate}></Column>
                    <Column field="CentroCostos" header="Centro Costos" headerStyle={{ width: "150px" }} sortable body={centroCostosBodyTemplate}></Column>
                    <Column field="Termino" header="Término" headerStyle={{ width: "90px" }} sortable body={terminoBodyTemplate}></Column>
                    <Column field="cargo" header="Cargo" headerStyle={{ width: "150px" }} sortable body={cargoBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
};
