import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Checkbox } from "@cooper/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@cooper/ui/form";
import { RadioGroup, RadioGroupItem } from "@cooper/ui/radio-group";
import { Textarea } from "@cooper/ui/textarea";

import type { ReviewFormType } from "~/components/form/review-form";
import { FormSection } from "~/components/form/form-section";
import { benefits } from "~/components/form/review-form";

interface CompanyDetailsSectionProps {
  companyName: string;
  textColor: string;
}

/**
 * CompanyDetailsSection component renders form fields for capturing
 * company details related to the co-op experience.
 */
export function CompanyDetailsSection({
  companyName,
  textColor,
}: CompanyDetailsSectionProps) {
  const form = useFormContext<ReviewFormType>();
  const [otherBenefits, setOtherBenefits] = useState(false);

  return (
    <FormSection title="Company Details" className={textColor}>
      <FormField
        control={form.control}
        name={"workEnvionment" as keyof ReviewFormType}
        render={({ field }) => (
          <FormItem className="space-y-6">
            <FormLabel>What kind of work model?*</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="INPERSON"
                      checked={field.value === "INPERSON"}
                    />
                  </FormControl>
                  <FormLabel>In-person</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="HYBRID"
                      checked={field.value === "HYBRID"}
                    />
                  </FormControl>
                  <FormLabel>Hybrid</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="REMOTE"
                      checked={field.value === "REMOTE"}
                    />
                  </FormControl>
                  <FormLabel>Remote</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={"drugTest" as keyof ReviewFormType}
        render={({ field }) => (
          <FormItem className="space-y-6">
            <FormLabel>Did {companyName} drug test?*</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="true"
                      checked={field.value === "true"}
                    />
                  </FormControl>
                  <FormLabel>Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="false"
                      checked={field.value === "false"}
                    />
                  </FormControl>
                  <FormLabel>No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={"overtimeNormal" as keyof ReviewFormType}
        render={({ field }) => (
          <FormItem className="space-y-6">
            <FormLabel>Was working overtime common?*</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-3"
              >
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="true"
                      checked={field.value === "true"}
                    />
                  </FormControl>
                  <FormLabel>Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-4 space-y-0">
                  <FormControl>
                    <RadioGroupItem
                      value="false"
                      checked={field.value === "false"}
                    />
                  </FormControl>
                  <FormLabel>No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormLabel>Select the benefit(s) that {companyName} offered</FormLabel>
      {benefits.map((benefit) => (
        <FormField
          key={benefit.field}
          control={form.control}
          name={benefit.field as keyof ReviewFormType}}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-4 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>{benefit.label}</FormLabel>
            </FormItem>
          )}
        />
      ))}
      <FormItem className="flex flex-row items-start space-x-4 space-y-0">
        <Checkbox
          checked={otherBenefits}
          onCheckedChange={(c) => setOtherBenefits(!!c)}
        />
        <FormLabel>Other</FormLabel>
        <FormMessage />
      </FormItem>
      {otherBenefits && (
        <FormField
          control={form.control}
          name={"otherBenefits" as keyof ReviewFormType}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Please type the other benefits here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </FormSection>
  );
}
