// Sistema de Gestão de Locações e Patrimônio Imobiliário
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CadastroInquilinos from "@/components/CadastroInquilinos";
import CadastroProprietarios from "@/components/CadastroProprietarios";
import CadastroComissionados from "@/components/CadastroComissionados";
import CadastroContratos from "@/components/CadastroContratos";
import ModuloFinanceiro from "@/components/ModuloFinanceiro";

export default function SistemaLocacao() {
  const [imoveis, setImoveis] = useState([]);
  const [inquilinos, setInquilinos] = useState([]);
  const [proprietarios, setProprietarios] = useState([]);
  const [comissionados, setComissionados] = useState([]);
  const [contratos, setContratos] = useState([]);

  const adicionarImovel = (imovel) => setImoveis([...imoveis, imovel]);
  const adicionarInquilino = (i) => setInquilinos([...inquilinos, i]);
  const adicionarProprietario = (p) => setProprietarios([...proprietarios, p]);
  const adicionarComissionado = (c) => setComissionados([...comissionados, c]);
  const adicionarContrato = (c) => setContratos([...contratos, c]);

  return (
    <div className="p-4">
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="imoveis">Imóveis</TabsTrigger>
          <TabsTrigger value="inquilinos">Inquilinos</TabsTrigger>
          <TabsTrigger value="proprietarios">Proprietários</TabsTrigger>
          <TabsTrigger value="comissionados">Comissionados</TabsTrigger>
          <TabsTrigger value="contratos">Contratos</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid grid-cols-2 gap-4">
            <Card><CardContent>Total de Imóveis: {imoveis.length}</CardContent></Card>
            <Card><CardContent>Contratos Ativos: {contratos.length}</CardContent></Card>
          </div>
        </TabsContent>

        <TabsContent value="imoveis">
          <CadastroContratos onAdicionar={adicionarImovel} />
        </TabsContent>

        <TabsContent value="inquilinos">
          <CadastroInquilinos onAdicionar={adicionarInquilino} />
        </TabsContent>

        <TabsContent value="proprietarios">
          <CadastroProprietarios onAdicionar={adicionarProprietario} />
        </TabsContent>

        <TabsContent value="comissionados">
          <CadastroComissionados onAdicionar={adicionarComissionado} />
        </TabsContent>

        <TabsContent value="contratos">
          <CadastroContratos
            imoveis={imoveis}
            inquilinos={inquilinos}
            proprietarios={proprietarios}
            comissionados={comissionados}
            onAdicionar={adicionarContrato}
          />
        </TabsContent>

        <TabsContent value="financeiro">
          <ModuloFinanceiro
            contratos={contratos}
            imoveis={imoveis}
            inquilinos={inquilinos}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
