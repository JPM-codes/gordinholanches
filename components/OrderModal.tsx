"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  Store,
  MapPin,
  Check,
} from "lucide-react";
import { whatsappLink } from "@/lib/data";
import { useCart, AddOn, parsePrice, formatPrice } from "@/context/CartContext";

const ADD_ONS: AddOn[] = [
  { id: "queijo", name: "Queijo", price: 7 },
  { id: "presunto", name: "Presunto", price: 7 },
  { id: "catupiry", name: "Catupiry", price: 7 },
  { id: "folhado", name: "Folhado", price: 10 },
  { id: "ovo", name: "Ovo", price: 5 },
  { id: "hamburguer", name: "Hambúrguer", price: 7 },
  { id: "salsicha", name: "Salsicha", price: 5 },
  { id: "bacon", name: "Bacon", price: 7 },
  { id: "cebola", name: "Cebola", price: 3 },
  { id: "milho", name: "Milho", price: 3 },
  { id: "tomate", name: "Tomate", price: 3 },
];

type Step = "item" | "cart" | "checkout";

function ItemStep({
  item,
  quantity,
  setQuantity,
  selectedAddOns,
  toggleAddOn,
  itemSubtotal,
  justAdded,
  handleAddToCart,
  handleGoToCart,
}: {
  item: NonNullable<ReturnType<typeof useCart>["selectedItem"]>;
  quantity: number;
  setQuantity: (q: number) => void;
  selectedAddOns: AddOn[];
  toggleAddOn: (addOn: AddOn) => void;
  itemSubtotal: number;
  justAdded: boolean;
  handleAddToCart: () => void;
  handleGoToCart: () => void;
}) {
  return (
    <div className="p-6 pt-2">
      <div className="flex gap-4 mb-6">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg text-cream truncate">
            {item.name}
          </h3>
          <p className="text-sm text-cream/50 mt-1 line-clamp-2">
            {item.description}
          </p>
          <p className="text-gold font-display mt-1">{item.price}</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-xs font-bold uppercase tracking-wider text-cream/60 mb-3 block">
          Quantidade
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream hover:border-gold/40 transition-colors"
            aria-label="Diminuir quantidade"
          >
            <Minus size={16} />
          </button>
          <span className="font-display text-xl text-cream w-8 text-center tabular-nums">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream hover:border-gold/40 transition-colors"
            aria-label="Aumentar quantidade"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-xs font-bold uppercase tracking-wider text-cream/60 mb-3 block">
          Adicionais
        </label>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {ADD_ONS.map((addOn) => {
            const isSelected = selectedAddOns.some((a) => a.id === addOn.id);
            return (
              <button
                key={addOn.id}
                type="button"
                onClick={() => toggleAddOn(addOn)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-colors text-left ${
                  isSelected
                    ? "border-gold/50 bg-gold/5"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0 ${
                      isSelected ? "bg-gold border-gold" : "border-white/20"
                    }`}
                  >
                    {isSelected && <Check size={14} className="text-char" />}
                  </div>
                  <span className="text-sm text-cream">{addOn.name}</span>
                </div>
                <span className="text-xs text-cream/50 shrink-0">
                  + {formatPrice(addOn.price)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between py-4 border-t border-white/5 mb-4">
        <span className="text-sm text-cream/60">Subtotal</span>
        <span className="font-display text-lg text-gold">
          {formatPrice(itemSubtotal)}
        </span>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={justAdded}
          className="flex-1 rounded-full border border-white/10 text-cream/80 py-3 text-xs font-bold uppercase tracking-wider hover:border-gold/40 transition-colors disabled:opacity-40"
        >
          {justAdded ? "Adicionado" : "Adicionar"}
        </button>
        <button
          type="button"
          onClick={handleGoToCart}
          className="flex-1 rounded-full bg-gold text-char py-3 text-xs font-bold uppercase tracking-wider hover:bg-gold/90 transition-colors"
        >
          {justAdded ? "Ver carrinho →" : "Adicionar e ir →"}
        </button>
      </div>
    </div>
  );
}



export default function OrderModal() {
  const {
    isModalOpen,
    closeModal,
    selectedItem,
    startAtCart,
    items,
    addItem,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const [step, setStep] = useState<Step>("item");
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [justAdded, setJustAdded] = useState(false);

  const [deliveryMethod, setDeliveryMethod] = useState<
    "pickup" | "delivery" | null
  >(null);
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    number: "",
    reference: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      if (startAtCart) {
        setStep("cart");
      } else if (selectedItem) {
        setStep("item");
      }
      setQuantity(1);
      setSelectedAddOns([]);
      setJustAdded(false);
      setDeliveryMethod(null);
      setAddress({
        street: "",
        neighborhood: "",
        number: "",
        reference: "",
      });
      setSubmitting(false);
    }
  }, [isModalOpen, selectedItem, startAtCart]);

  useEffect(() => {
    if (!isModalOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const toggleAddOn = useCallback((addOn: AddOn) => {
    setSelectedAddOns((prev) =>
      prev.some((a) => a.id === addOn.id)
        ? prev.filter((a) => a.id !== addOn.id)
        : [...prev, addOn],
    );
  }, []);

  const itemSubtotal = useMemo(() => {
    if (!selectedItem) return 0;
    const base = parsePrice(selectedItem.price);
    const addOnTotal = selectedAddOns.reduce((a, b) => a + b.price, 0);
    return (base + addOnTotal) * quantity;
  }, [selectedItem, selectedAddOns, quantity]);

  const handleAddToCart = useCallback(() => {
    if (!selectedItem) return;
    addItem({
      menuItem: {
        id: selectedItem.id,
        name: selectedItem.name,
        price: selectedItem.price,
        image: selectedItem.image,
      },
      quantity,
      addOns: selectedAddOns,
    });
    setJustAdded(true);
  }, [selectedItem, quantity, selectedAddOns, addItem]);

  const handleGoToCart = useCallback(() => {
    if (!selectedItem) return;
    if (!justAdded) {
      addItem({
        menuItem: {
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          image: selectedItem.image,
        },
        quantity,
        addOns: selectedAddOns,
      });
    }
    setStep("cart");
  }, [selectedItem, quantity, selectedAddOns, addItem, justAdded]);

  const handleSubmitOrder = useCallback(() => {
    if (submitting) return;
    setSubmitting(true);

    let message = "🛵 *NOVO PEDIDO - Gordinho Lanches* 🛵\n\n";
    message += "*📋 ITENS:*\n";

    items.forEach((cartItem) => {
      const base = parsePrice(cartItem.menuItem.price);
      const addOnTotal = cartItem.addOns.reduce((a, b) => a + b.price, 0);
      const itemTotal = (base + addOnTotal) * cartItem.quantity;
      message += `${cartItem.quantity}x ${cartItem.menuItem.name} - ${formatPrice(itemTotal)}\n`;
      if (cartItem.addOns.length > 0) {
        cartItem.addOns.forEach((ao) => {
          message += `   + ${ao.name} (${formatPrice(ao.price)})\n`;
        });
      }
    });

    message += `\n💰 *TOTAL: ${formatPrice(totalPrice)}*\n\n`;

    if (deliveryMethod === "pickup") {
      message += "📍 *RETIRADA NO LOCAL*";
    } else if (deliveryMethod === "delivery") {
      message += "📍 *ENTREGA:*\n";
      message += `Rua: ${address.street}\n`;
      message += `Bairro: ${address.neighborhood}\n`;
      message += `N°: ${address.number}\n`;
      if (address.reference) {
        message += `Complemento: ${address.reference}\n`;
      }
    }

    const url = whatsappLink(message);
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      closeModal();
      setSubmitting(false);
    }, 500);
  }, [items, totalPrice, deliveryMethod, address, submitting, closeModal]);

  const handleCloseAndClear = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseAndClear();
          }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.9,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[95dvh] overflow-y-auto bg-char border border-white/5 rounded-t-3xl sm:rounded-3xl shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 bg-char border-b border-white/5 rounded-t-3xl sm:rounded-t-3xl">
              <button
                onClick={handleCloseAndClear}
                className="p-1 text-cream/60 hover:text-cream transition-colors"
                aria-label="Fechar"
              >
                <X size={22} />
              </button>
              {step === "item" && selectedItem && (
                <span className="text-sm font-semibold text-cream/80 truncate mx-4 text-center">
                  {selectedItem.name}
                </span>
              )}
              {step === "cart" && (
                <span className="text-sm font-semibold text-cream/80">
                  Seu carrinho
                </span>
              )}
              {step === "checkout" && (
                <span className="text-sm font-semibold text-cream/80">
                  Finalizar pedido
                </span>
              )}
              <span className="flex items-center gap-2 text-sm text-cream/60 shrink-0">
                <ShoppingCart size={16} />
                {totalItems}
              </span>
            </div>

            {/* Step: Item customization */}
            {step === "item" && selectedItem && (
              <ItemStep
                item={selectedItem}
                quantity={quantity}
                setQuantity={setQuantity}
                selectedAddOns={selectedAddOns}
                toggleAddOn={toggleAddOn}
                itemSubtotal={itemSubtotal}
                justAdded={justAdded}
                handleAddToCart={handleAddToCart}
                handleGoToCart={handleGoToCart}
              />
            )}

            {/* Step: Cart */}
            {step === "cart" && (
              <div className="p-6 pt-2">
                {items.length === 0 ? (
                  <div className="py-12 text-center">
                    <ShoppingCart
                      size={48}
                      className="mx-auto text-cream/20 mb-4"
                    />
                    <p className="text-cream/50">Seu carrinho está vazio</p>
                    <button
                      type="button"
                      onClick={handleCloseAndClear}
                      className="mt-4 rounded-full bg-gold text-char px-6 py-3 text-xs font-bold uppercase tracking-wider"
                    >
                      Voltar ao cardápio
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {items.map((cartItem) => {
                        const base = parsePrice(cartItem.menuItem.price);
                        const addOnTotal = cartItem.addOns.reduce(
                          (a, b) => a + b.price,
                          0,
                        );
                        const lineTotal =
                          (base + addOnTotal) * cartItem.quantity;
                        return (
                          <div
                            key={cartItem.uniqueId}
                            className="flex gap-3 items-start p-3 rounded-xl border border-white/5"
                          >
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                              <Image
                                src={cartItem.menuItem.image}
                                alt={cartItem.menuItem.name}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-cream truncate">
                                {cartItem.menuItem.name}
                              </p>
                              {cartItem.addOns.length > 0 && (
                                <p className="text-xs text-cream/40 mt-0.5 truncate">
                                  +{" "}
                                  {cartItem.addOns
                                    .map((a) => a.name)
                                    .join(", ")}
                                </p>
                              )}
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      cartItem.uniqueId,
                                      cartItem.quantity - 1,
                                    )
                                  }
                                  className="w-6 h-6 rounded border border-white/10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                                  aria-label="Diminuir"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="text-sm text-cream w-6 text-center tabular-nums">
                                  {cartItem.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateQuantity(
                                      cartItem.uniqueId,
                                      cartItem.quantity + 1,
                                    )
                                  }
                                  className="w-6 h-6 rounded border border-white/10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
                                  aria-label="Aumentar"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="text-sm text-cream">
                                {formatPrice(lineTotal)}
                              </p>
                              <button
                                type="button"
                                onClick={() =>
                                  removeItem(cartItem.uniqueId)
                                }
                                className="mt-2 text-cream/30 hover:text-ember transition-colors"
                                aria-label="Remover item"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-white/5 mb-4">
                      <span className="text-sm text-cream/60">Total</span>
                      <span className="font-display text-xl text-gold">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleCloseAndClear}
                        className="flex-1 rounded-full border border-white/10 text-cream/80 py-3 text-xs font-bold uppercase tracking-wider hover:border-gold/40 transition-colors"
                      >
                        + Adicionar mais
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep("checkout")}
                        className="flex-1 rounded-full bg-gold text-char py-3 text-xs font-bold uppercase tracking-wider hover:bg-gold/90 transition-colors"
                      >
                        Finalizar →
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step: Checkout */}
            {step === "checkout" && (
              <div className="p-6 pt-2">
                <div className="mb-6">
                  <label className="text-xs font-bold uppercase tracking-wider text-cream/60 mb-3 block">
                    Forma de recebimento
                  </label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod("pickup")}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                        deliveryMethod === "pickup"
                          ? "border-gold bg-gold/5"
                          : "border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          deliveryMethod === "pickup"
                            ? "border-gold"
                            : "border-white/20"
                        }`}
                      >
                        {deliveryMethod === "pickup" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                        )}
                      </div>
                      <Store size={20} className="text-cream/60 shrink-0" />
                      <div className="text-left">
                        <p className="text-sm font-semibold text-cream">
                          Retirada no local
                        </p>
                        <p className="text-xs text-cream/40">
          Busque na lanchonete
                        </p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod("delivery")}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                        deliveryMethod === "delivery"
                          ? "border-gold bg-gold/5"
                          : "border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          deliveryMethod === "delivery"
                            ? "border-gold"
                            : "border-white/20"
                        }`}
                      >
                        {deliveryMethod === "delivery" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                        )}
                      </div>
                      <MapPin size={20} className="text-cream/60 shrink-0" />
                      <div className="text-left">
                        <p className="text-sm font-semibold text-cream">
                          Entrega
                        </p>
                        <p className="text-xs text-cream/40">
                          Receba em casa
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {deliveryMethod === "delivery" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-6"
                    >
                      <div className="space-y-3 pt-2">
                        <input
                          type="text"
                          placeholder="Rua"
                          value={address.street}
                          onChange={(e) =>
                            setAddress((a) => ({
                              ...a,
                              street: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                        <div className="flex gap-3">
                          <input
                            type="text"
                            placeholder="Bairro"
                            value={address.neighborhood}
                            onChange={(e) =>
                              setAddress((a) => ({
                                ...a,
                                neighborhood: e.target.value,
                              }))
                            }
                            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                          />
                          <input
                            type="text"
                            placeholder="N°"
                            value={address.number}
                            onChange={(e) =>
                              setAddress((a) => ({
                                ...a,
                                number: e.target.value,
                              }))
                            }
                            className="w-24 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Complemento (opcional) — ex: Casa portão branco, esquina"
                          value={address.reference}
                          onChange={(e) =>
                            setAddress((a) => ({
                              ...a,
                              reference: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cream text-sm placeholder:text-cream/30 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="py-4 border-t border-white/5 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-cream/60 mb-3">
                    Resumo do pedido
                  </p>
                  {items.map((cartItem) => {
                    const base = parsePrice(cartItem.menuItem.price);
                    const addOnTotal = cartItem.addOns.reduce(
                      (a, b) => a + b.price,
                      0,
                    );
                    return (
                      <div
                        key={cartItem.uniqueId}
                        className="flex justify-between text-sm text-cream/70 mb-1"
                      >
                        <span className="truncate mr-2">
                          {cartItem.quantity}x {cartItem.menuItem.name}
                          {cartItem.addOns.length > 0 &&
                            ` (+${cartItem.addOns.map((a) => a.name).join(", ")})`}
                        </span>
                        <span className="shrink-0">
                          {formatPrice((base + addOnTotal) * cartItem.quantity)}
                        </span>
                      </div>
                    );
                  })}
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                    <span className="text-sm text-cream/60">Total</span>
                    <span className="font-display text-lg text-gold">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep("cart")}
                    className="flex-1 rounded-full border border-white/10 text-cream/80 py-3 text-xs font-bold uppercase tracking-wider hover:border-gold/40 transition-colors"
                  >
                    ← Voltar
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitOrder}
                    disabled={!deliveryMethod || submitting}
                    className="flex-1 rounded-full bg-ember text-cream py-3 text-xs font-bold uppercase tracking-wider hover:bg-ember-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Enviando..." : "Enviar pedido"}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
