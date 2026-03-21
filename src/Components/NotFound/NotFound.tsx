import { useNavigate } from 'react-router-dom';
import { HouseSimple, ArrowLeft } from 'phosphor-react';
import { ContainerNotFound, BorderNotFound, CodeBlock } from './NotFoundStyle';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <ContainerNotFound className="h-screen flex flex-col items-center justify-center gap-8">

            <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-sm tracking-[0.4em] uppercase opacity-40">error</p>
                <h1 className="text-9xl font-bold tracking-tight">404</h1>
                <p className="text-xl opacity-60 mt-2">Página não encontrada</p>
                <p className="text-sm opacity-30 max-w-xs leading-relaxed mt-1">
                    A rota que você tentou acessar não existe ou foi removida.
                </p>
            </div>

            <div className="flex gap-4 mt-4">
                <BorderNotFound
                    className="cursor-pointer p-3"
                    onClick={() => navigate(-1)}
                >
                    <div className="flex items-center gap-2 px-2">
                        <ArrowLeft size={18} weight="thin" />
                        <span className="text-sm">Voltar</span>
                    </div>
                </BorderNotFound>

                <BorderNotFound
                    className="cursor-pointer p-3"
                    onClick={() => navigate('/')}
                >
                    <div className="flex items-center gap-2 px-2">
                        <HouseSimple size={18} weight="thin" />
                        <span className="text-sm">Início</span>
                    </div>
                </BorderNotFound>
            </div>

        </ContainerNotFound>
    );
};

export default NotFound;
