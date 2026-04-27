import { useState, type FormEvent } from 'react'
import { api } from '../services/api'
import styles from './Contact.module.css'

interface FormState {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await api.post('/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.label}>Contato</span>
            <h2 className={styles.heading}>
              Vamos construir<br />
              algo <em>juntos?</em>
            </h2>
            <p className={styles.sub}>
              Estou disponível para projetos freelance, oportunidades
              de emprego ou apenas uma conversa sobre tecnologia.
            </p>
            <a href="mailto:julio985555053@gmail.com" className={styles.email}>
              julio985555053@gmail.com
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Nome</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Fale sobre seu projeto..."
                className={styles.textarea}
                rows={5}
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </div>

            <div className={styles.formFooter}>
              {status === 'success' && (
                <p className={styles.success}>Mensagem enviada! Retorno em breve.</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>Erro ao enviar. Tente novamente.</p>
              )}
              <button
                type="submit"
                className={styles.btn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}