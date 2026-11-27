import { Container } from "@/components/ui/Container";

/*
  [A CONFIRMAR] Os textos abaixo descrevem o PROCESSO de trabalho e foram
  propostos pelo consultor. Ajuste para refletir como você realmente trabalha:
  não prometa o que você não entrega (ex.: "acompanhamento").
*/
const steps = [
  {
    number: "01",
    title: "Conversa e diagnóstico",
    text: "Você me conta como o trabalho é feito hoje. Eu mapeio as etapas, onde há repetição e retrabalho e o que vale a pena automatizar.",
  },
  {
    number: "02",
    title: "Desenho e entrega da solução",
    text: "Defino a solução mais simples que resolve o problema (uma planilha melhor, uma automação ou uma pequena ferramenta) e entrego pronta para usar.",
  },
  {
    number: "03",
    title: "Ajustes e acompanhamento",
    text: "Depois da entrega, ajusto o que for preciso para a ferramenta se encaixar de verdade na sua rotina.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="bg-surface py-20 md:py-28"
    >
      <Container>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
          <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
          Como eu trabalho
        </p>

        <h2
          id="como-funciona-titulo"
          className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl"
        >
          Do problema à ferramenta, em três passos.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
          Cada trabalho começa por entender o seu caso.
        </p>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-card border border-border bg-surface-alt p-6 md:p-8"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-accent-text">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
