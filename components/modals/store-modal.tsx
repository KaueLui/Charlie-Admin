"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/model";

export const StoreModal = () => {
    const StoreModal = useStoreModal();

    return(
        <Modal
            title="Criar nova loja" description="Crie uma nova loja e organize seus produtos e categorias" isOpen={StoreModal.isOpen} onClose={StoreModal.onClose}>
            Formulário de criação de loja
        </Modal>
    );
};