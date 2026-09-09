import { Button, Group, Stack, TextInput } from '@mantine/core'
import { schemaResolver, useForm } from '@mantine/form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod/v4'

const schema = z.object({
  name: z.string().min(1, { error: 'validation.required' }),
  email: z.email({ error: 'validation.invalidEmail' }),
})

type FormValues = z.infer<typeof schema>

export function FormExample() {
  const { t } = useTranslation()
  const form = useForm<FormValues>({
    validate: schemaResolver(schema, { sync: true }),
    initialValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack gap="xs">
        <TextInput
          label={t('name')}
          placeholder="John Doe"
          withAsterisk
          {...form.getInputProps('name')}
          error={form.errors.name ? t(String(form.errors.name)) : undefined}
        />
        <TextInput
          label={t('email')}
          placeholder="john@example.com"
          withAsterisk
          {...form.getInputProps('email')}
          error={form.errors.email ? t(String(form.errors.email)) : undefined}
        />
        <Group justify="flex-end">
          <Button type="submit">{t('submit')}</Button>
        </Group>
      </Stack>
    </form>
  )
}
