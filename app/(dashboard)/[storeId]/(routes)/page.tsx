import prismadb from "@/lib/prismadb";

interface DashboardPagesProps {
    params: { storeId: string}
};

const DashboardPage: React.FC<DashboardPagesProps> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    });

    return(
        <div>
            Loja: {store?.name};
        </div>
    );
};

export default DashboardPage;